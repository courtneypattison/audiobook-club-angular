import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Audiobook } from './audiobook.model';
import { Chapter } from './chapter.model';


@Injectable()
export class AudiobookService {
  private baseURL = 'https://archive.org/';


  constructor(private jsonp: Jsonp) { }


  getAudiobookIdentifiers(): Observable<any> {
    const audiobooksURL = this.baseURL
      + 'advancedsearch.php'
      + '?q=collection%3Alibrivoxaudio'
      + '&fl[]=identifier'
      + '&sort[]=downloads+desc'
      + '&rows=5'
      + '&page=1'
      + '&output=json'
      + '&save=yes'
      + '&callback=JSONP_CALLBACK';


    return this.jsonp
      .get(audiobooksURL)
      .map((response: any) => response);
  }


  getAudiobook(identifier: string): Observable<any> {
    const audiobookURL = this.baseURL
      + 'details/'
      + identifier
      + '&output=json'
      + '&callback=JSONP_CALLBACK';


    return this.jsonp
      .get(audiobookURL)
      .map((response: any) => {
        const audiobook = new Audiobook();
        const { title, creator, description, subject, runtime } = response._body.metadata;

        audiobook.identifier = identifier;
        audiobook.title = title && title[0] ? title[0] : 'Unknown title';
        audiobook.authors = creator ? creator : 'Unknown author(s)';
        audiobook.description = description && description[0] ? this.cleanDescription(description[0]) : 'Description unavailable';
        audiobook.subjects = subject && subject[0] ? this.cleanSubjects(subject[0]) : 'Subjects unavailable';
        audiobook.length = runtime ? this.cleanLength(runtime[0]) : 'Length unavailable';

        if (response._body.reviews) {
          const { info } = response._body.reviews;

          audiobook.rating = info.avg_rating ? info.avg_rating : '0.00';
        } else {
          audiobook.rating = '0.00';
        }

        if (response._body.misc) {
          const { image } = response._body.misc;

          audiobook.imageURL = image;
        }

        if (response._body.files) {
          const files = response._body.files;
          const chapters = [];

          for (const filename in files) {
            if (filename.endsWith('mp3') && !(filename.endsWith('64kb.mp3') || filename.endsWith('128kb.mp3'))) {
              chapters.push(new Chapter(filename, files[filename].title, this.cleanLength(files[filename].length)));
            }
          }

          audiobook.chapters = chapters;
        }

        return audiobook;
      });
  }


  cleanDescription(description: string): string {
    return description.replace(/(<[^>]+>|\n\nFor further information,[^\n]+|\n\nFor more[^\n]+)/gi, '')
      .replace(/\n(Download )?M4B[^\n]+/gi, '\n\n')
      .replace(/\n\n+/, '')
      .trim();
  }


  cleanLength(length: string): string {
    const lengthSplit = length.split(':');

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


  cleanSubjects(subjects: string): string {
    return subjects.replace(/(audio( ?books?)?|librivox);?/gi, '')
      .replace(/; */gi, ', ')
      .trim()
      .replace(/,$/, '');
  }
}
