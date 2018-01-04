import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AudiobookDetailComponent } from './audiobook-detail.component';
import { AudiobookHttpErrorComponent } from '../audiobook-http-error/audiobook-http-error.component';

import { AudiobookService } from '../shared/audiobook.service';
import { LoggerService } from '../../core/logger/logger.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { MockLoggerService } from '../../../testing/mock-logger.service';
import { MockAudiobookService } from '../../../testing/mock-audiobook.service';
import { MockActivatedRoute, mockIdentifier } from '../../../testing/mock-activated-route.service';

import { of } from 'rxjs/observable/of';

describe('AudiobookDetailComponent', () => {
  let component: AudiobookDetailComponent;
  let fixture: ComponentFixture<AudiobookDetailComponent>;

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
        { provide: AudiobookService, useClass: MockAudiobookService },
        { provide: LoggerService, useClass: MockLoggerService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create audiobook detail', () => {
    expect(component).toBeTruthy();
  });

  describe('#getAudiobook', () => {
    it('should assign an audiobook to this.audiobook', () => {
      component.getAudiobook();
      expect(component.audiobook.identifier).toEqual(mockIdentifier);
    });
  });
});
