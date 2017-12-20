import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AudiobookDetailComponent } from './audiobook-detail.component';
import { AudiobookService } from '../shared/audiobook.service';
import { LoggerService } from '../../core/logger.service';
import { MockLoggerService } from '../../../testing/logger.service';

describe('AudiobookDetailComponent', () => {
  let component: AudiobookDetailComponent;
  let fixture: ComponentFixture<AudiobookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [AudiobookDetailComponent],
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
});
