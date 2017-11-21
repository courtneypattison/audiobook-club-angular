import { Component, OnInit } from '@angular/core';

import { Audiobook } from './shared/audiobook.model';
import { AudiobookService } from './shared/audiobook.service';
import { Chapter } from './shared/chapter.model';

@Component({
  selector: 'ac-audiobooks',
  templateUrl: './audiobooks.component.html',
  styleUrls: ['./audiobooks.component.css']
})
export class AudiobooksComponent implements OnInit {
  audiobooks: Audiobook[] = [];


  constructor(private audiobookService: AudiobookService) { }


  ngOnInit() {
    this.getAudiobooks();
  }


  getAudiobooks() {
    this.audiobookService.getAudiobookIdentifiers().subscribe(data => {
      this.audiobooks = data._body.response.docs;
      for (const audiobook of this.audiobooks) {
        this.audiobookService.getAudiobook(audiobook.identifier).subscribe(detailData => {
          const {title, creator, description, subject, runtime} = detailData._body.metadata;

          audiobook.title = title && title[0] ? title[0] : 'Unknown title';
          audiobook.authors = creator ? creator : 'Unknown author(s)';
          audiobook.description = description && description[0] ? this.cleanDescription(description[0]) : 'Description unavailable';
          audiobook.subjects = subject && subject[0] ? this.cleanSubjects(subject[0]) : 'Subjects unavailable';
          audiobook.length = runtime ? this.cleanLength(runtime[0]) : 'Length unavailable';

          if (detailData._body.reviews) {
            const {info} = detailData._body.reviews;

            audiobook.rating = info.avg_rating ? info.avg_rating : '0.00';
          } else {
            audiobook.rating = '0.00';
          }

          if (detailData._body.misc) {
            const {image} = detailData._body.misc;

            audiobook.imageURL = image;
          }

          if (detailData._body.files) {
            const files = detailData._body.files;
            const chapters = [];

            for (const filename in files) {
              if (filename.endsWith('mp3') && !(filename.endsWith('64kb.mp3') || filename.endsWith('128kb.mp3'))) {
                chapters.push(new Chapter(filename, files[filename].title, this.cleanLength(files[filename].length)));
              }
            }

            audiobook.chapters = chapters;
          }
        });
      }
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
