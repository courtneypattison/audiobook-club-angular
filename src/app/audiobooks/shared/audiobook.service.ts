import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { AUDIOBOOKS } from './mock-audiobooks';


@Injectable()
export class AudiobookService {
  private baseURL = 'https://archive.org/';


  constructor(private jsonp: Jsonp) { }


  getAudiobookIdentifiers(): Observable<any> {
    const AUDIOBOOKS_URL = this.baseURL
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
      .get(AUDIOBOOKS_URL)
      .map((response: any) => response);
  }


  getAudiobook(identifier: string): Observable<any> {
    const AUDIOBOOK_URL = this.baseURL
    + 'details/'
    + identifier
    + '&output=json'
    + '&callback=JSONP_CALLBACK';


    return this.jsonp
      .get(AUDIOBOOK_URL)
      .map((response: any) => response);
  }
}
