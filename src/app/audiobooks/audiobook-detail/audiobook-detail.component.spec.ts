import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Audiobook } from '../shared/audiobook.model';
import { AudiobookDetailComponent } from './audiobook-detail.component';
import { AudiobookHttpErrorComponent } from '../audiobook-http-error/audiobook-http-error.component';

import { ActivatedRoute } from '@angular/router';
import { AudiobookService } from '../shared/audiobook.service';
import { LoggerService } from '../../core/logger/logger.service';

import { MockActivatedRoute } from '../../../testing/mock-activated-route.service';
import { MockLoggerService } from '../../../testing/mock-logger.service';
import { mockIdentifier } from '../../../testing/mock-audiobooks';

describe('AudiobookDetailComponent', () => {
  let component: AudiobookDetailComponent;
  let fixture: ComponentFixture<AudiobookDetailComponent>;
  let service: AudiobookService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AudiobookDetailComponent,
        AudiobookHttpErrorComponent
      ],
      providers: [
        AudiobookService,
        { provide: LoggerService, useClass: MockLoggerService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobookDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AudiobookService);
    fixture.detectChanges();
  });

  it('should create audiobook detail', () => {
    expect(component).toBeTruthy();
  });

  describe('#getAudiobook', () => {
    it('should assign an audiobook to this.audiobook', () => {
      spyOn(service, 'getAudiobookDetails').and.returnValue(of(new Audiobook(mockIdentifier)));
      component.getAudiobook();
      expect(component.audiobook.identifier).toEqual(mockIdentifier);
    });

    it('should set this.httpError to true', () => {
      spyOn(service, 'getAudiobookDetails').and.returnValue(Observable.throw(new ErrorEvent('test error')));
      component.getAudiobook();
      expect(component.httpError).toBeTruthy();
    });
  });
});
