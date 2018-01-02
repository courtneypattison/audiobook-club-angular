import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Audiobook } from './audiobook.model';
import { Chapter } from './chapter.model';
import { LoggerService } from '../../core/logger/logger.service';

export const httpErrorIdentifier = 'http-error';
export const httpErrorContents = `
  <h1 class="no-toc">Request for audiobook failed.</h1>
  <p>
    We are unable to retrieve the audiobooks at this time.
    Please check your connection and try again later.
  </p>
`;

@Injectable()
export class AudiobookService {
  private baseURL = 'https://archive.org/';

  constructor(private http: HttpClient, private logger: LoggerService) { }

  // Get URLs

  getAudiobooksUrl(): string {
    return this.baseURL
      + 'advancedsearch.php'
      + '?q=collection%3Alibrivoxaudio'
      + '&fl[]=identifier'
      + '&sort[]=downloads+desc'
      + '&rows=10'
      + '&page=1'
      + '&output=json'
      + '&save=yes'
      + '&callback=callback';
  }

  getAudiobookDetailsUrl(identifier: string): string {
    return this.baseURL
      + 'details/'
      + identifier
      + '&output=json'
      + '&callback=callback';
  }

  // HTTP Requests

  getAudiobooks(): Observable<Audiobook[]> {
    const audiobooksUrl = this.getAudiobooksUrl();

    this.logger.log('Getting audiobooks from', audiobooksUrl);
    return this.http
      .jsonp(audiobooksUrl, 'callback')
      .map((json: any) => {
        const audiobooks: Audiobook[] = [];
        const identifiers = json.response.docs;

        for (let i = 0; i < identifiers.length; i++) {
          audiobooks[i] = new Audiobook(identifiers[i].identifier);
        }

        return audiobooks;
      })
      .catch((error: HttpErrorResponse) => of([this.handleHttpError(error)]));
  }

  getAudiobookDetails(audiobook: Audiobook): Observable<Audiobook> {
    const audiobookUrl = this.getAudiobookDetailsUrl(audiobook.identifier);

    this.logger.log('Getting audiobook details from', audiobookUrl);
    return this.http
      .jsonp(audiobookUrl, 'callback')
      .map((response: any) => {
        const { title, creator, description, subject, runtime } = response.metadata;

        audiobook.title = this.getTitle(title);
        audiobook.author = this.getAuthor(creator);
        audiobook.description = this.getDescription(description);
        audiobook.subjects = this.getSubjects(subject);
        audiobook.length = this.getLength(runtime);
        audiobook.rating = this.getRating(response.reviews);
        audiobook.imageUrl = this.getImageUrl(response.misc);
        audiobook.chapters = this.getChapters(response.files);

        return audiobook;
      })
      .catch((error: HttpErrorResponse) => of(this.handleHttpError(error)));
  }

  // Error Handling

  private handleHttpError(error: HttpErrorResponse): Audiobook {
    if (error.error instanceof Error) {
      this.logger.error('An error occurred:', error.error.message);
    } else {
      this.logger.error(`Backend returned code ${error.status}, body was: ${error.message}`);
    }

    return new Audiobook(httpErrorIdentifier);
  }

  // JSON Parsers

  private getTitle(title: string[]): string {
    return title && title[0] ? title[0] : 'Unknown title';
  }

  private getAuthor(creator: string[]): string {
    return creator && creator[0] ? creator[0] : 'Unknown author(s)';
  }

  private getDescription(description: string[]): string {
    return description && description[0] ? this.cleanDescription(description[0]) : 'Description unavailable';
  }

  private getSubjects(subject: string[]): string {
    return subject && subject[0] ? this.cleanSubjects(subject[0]) : 'Subjects unavailable';
  }

  private getLength(runtime: string): string {
    return runtime ? this.cleanLength(runtime[0]) : 'Length unavailable';
  }

  private getRating(reviews: any): string {
    if (reviews) {
      const { info } = reviews;

      if (info && info.avg_rating) {
        return info.avg_rating;
      }
    }
    return '0.00';
  }

  private getImageUrl(misc: any): string {
    if (misc) {
      const { image } = misc;

      return image.replace('_thumb', '');
    }
    return 'https://cdn.pixabay.com/photo/2017/04/30/18/33/cat-2273598_1280.jpg';
  }

  private getChapters(files: any): Chapter[] {
    const chapters = [];

    if (files) {
      for (const filename in files) {
        if (filename.endsWith('mp3') && !(filename.endsWith('64kb.mp3') || filename.endsWith('128kb.mp3'))) {
          chapters.push(new Chapter(filename, files[filename].title, this.cleanLength(files[filename].length)));
        }
      }

      return chapters;
    }
    chapters.push(new Chapter('', 'Files unavailable', ''));
    return chapters;
  }

  // String cleaners

  private cleanDescription(description: string): string {
    return description.replace(/(<[^>]+>|\n\nFor further information,[^\n]+|\n\nFor more[^\n]+)/gi, '')
      .replace(/\n(Download )?M4B[^\n]+/gi, '\n\n')
      .replace(/\n\n+/, '')
      .trim();
  }

  private cleanLength(length: string): string {
    const lengthSplit = length.split(':');

    for (const time of lengthSplit) {
      if (!Number(time)) {
        return 'Length unavailable';
      }
    }

    if (lengthSplit.length === 3) {
      return lengthSplit[0] + 'h ' + lengthSplit[1] + 'm';
    } else if (lengthSplit.length === 2) {
      return lengthSplit[0] + 'm ' + lengthSplit[1] + 's';
    } else if (lengthSplit.length === 1) {
      return Math.floor(Number(lengthSplit[0]) / 60) + 'm ' + Math.floor(Number(lengthSplit[0]) % 60) + 's';
    } else {
      return 'Length unavailable';
    }
  }

  private cleanSubjects(subjects: string): string {
    return subjects.replace(/(audio( ?books?)?|librivox);?/gi, '')
      .replace(/; */gi, ', ')
      .trim()
      .replace(/,$/, '');
  }
}
