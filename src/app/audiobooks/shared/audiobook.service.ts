import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


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
      .map((response: any) => response);
  }
}
