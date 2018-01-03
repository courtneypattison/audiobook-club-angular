import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AudiobookListComponent } from './audiobook-list.component';
import { AudiobookHttpErrorComponent } from '../audiobook-http-error/audiobook-http-error.component';

import { AudiobookService } from '../shared/audiobook.service';
import { LoggerService } from '../../core/logger/logger.service';
import { MockLoggerService } from '../../../testing/logger.service';

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
        AudiobookService,
        { provide: LoggerService, useClass: MockLoggerService }
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
});
