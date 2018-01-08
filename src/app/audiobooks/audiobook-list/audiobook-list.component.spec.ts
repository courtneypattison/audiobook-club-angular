import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AudiobookListComponent } from './audiobook-list.component';
import { AudiobookHttpErrorComponent } from '../audiobook-http-error/audiobook-http-error.component';

import { ActivatedRoute } from '@angular/router';
import { AudiobookService } from '../shared/audiobook.service';
import { LoggerService } from '../../core/logger/logger.service';

import { MockActivatedRoute } from '../../../testing/mock-activated-route.service';
import { MockAudiobookService } from '../../../testing/mock-audiobook.service';
import { MockLoggerService } from '../../../testing/mock-logger.service';
import { mockIdentifier } from '../../../testing/mock-audiobooks';

describe('AudiobookListComponent', () => {
  let component: AudiobookListComponent;
  let fixture: ComponentFixture<AudiobookListComponent>;

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
        { provide: AudiobookService, useClass: MockAudiobookService },
        { provide: LoggerService, useClass: MockLoggerService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create audiobook list', () => {
    expect(component).toBeTruthy();
  });

  describe('#getAudiobook', () => {
    it('should assign an audiobook to this.audiobook', () => {
      component.getAudiobooks();
      expect(component.audiobooks[0].identifier).toEqual(mockIdentifier);
    });
  });
});
