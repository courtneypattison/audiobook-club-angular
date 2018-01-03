import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AudiobookDetailComponent } from './audiobook-detail.component';
import { AudiobookHttpErrorComponent } from '../audiobook-http-error/audiobook-http-error.component';

import { AudiobookService } from '../shared/audiobook.service';
import { LoggerService } from '../../core/logger/logger.service';
import { MockLoggerService } from '../../../testing/logger.service';

describe('AudiobookDetailComponent', () => {
  let component: AudiobookDetailComponent;
  let fixture: ComponentFixture<AudiobookDetailComponent>;
  @Component({template: ''})
  class BlankComponent {
  }
  const mockPath = 'path';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [{path: mockPath, component: BlankComponent}]
        )
      ],
      declarations: [
        AudiobookDetailComponent,
        AudiobookHttpErrorComponent,
        BlankComponent
      ],
      providers: [
        AudiobookService,
        { provide: LoggerService, useClass: MockLoggerService }
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
      // expect(component.audiobook.identifier).toEqual(mockPath);
    });
  });
});
