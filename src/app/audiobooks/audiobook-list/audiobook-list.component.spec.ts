import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Observable, of, throwError } from 'rxjs';

import { Audiobook } from '../shared/audiobook.model';
import { AudiobookListComponent } from './audiobook-list.component';
import { AudiobookHttpErrorComponent } from '../audiobook-http-error/audiobook-http-error.component';

import { AudiobookService } from '../shared/audiobook.service';
import { LoggerService } from '../../core/logger/logger.service';

import { MockLoggerService } from '../../../testing/mock-logger.service';
import { mockIdentifier, mockIdentifiers } from '../../../testing/mock-audiobooks';

describe('AudiobookListComponent', () => {
  let component: AudiobookListComponent;
  let fixture: ComponentFixture<AudiobookListComponent>;
  let service: AudiobookService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AudiobookListComponent,
        AudiobookHttpErrorComponent
      ],
      providers: [
        AudiobookService,
        { provide: LoggerService, useClass: MockLoggerService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobookListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AudiobookService);
    fixture.detectChanges();
  });

  it('should create audiobook list', () => {
    expect(component).toBeTruthy();
  });

  describe('#getAudiobooks', () => {
    it('should assign an audiobooks to this.audiobooks', () => {
      spyOn(service, 'getAudiobooks').and.returnValue(of(mockIdentifiers.response.docs));
      component.getAudiobooks();
      expect(component.audiobooks[0].identifier).toEqual(mockIdentifiers.response.docs[0].identifier);
    });

    it('should set this.httpError to true because cannot get audiobooks', () => {
      spyOn(service, 'getAudiobooks').and.returnValue(throwError(new ErrorEvent('test error')));
      component.getAudiobooks();
      expect(component.httpError).toBeTruthy();
    });

    it('should get audiobook details', () => {
      spyOn(service, 'getAudiobooks').and.returnValue(of(mockIdentifiers.response.docs));
      spyOn(service, 'getAudiobookDetails').and.returnValue(of(new Audiobook(mockIdentifier)));
      component.getAudiobooks();
      expect(component.audiobooks[0].identifier).toEqual(mockIdentifier);
    });

    it('should set this.httpError to true because cannot get audiobook details', () => {
      spyOn(service, 'getAudiobooks').and.returnValue(of(mockIdentifiers.response.docs));
      spyOn(service, 'getAudiobookDetails').and.returnValue(throwError(new ErrorEvent('test error')));
      component.getAudiobooks();
      expect(component.httpError).toBeTruthy();
    });
  });
});
