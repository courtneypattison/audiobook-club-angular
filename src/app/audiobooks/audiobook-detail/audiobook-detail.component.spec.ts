import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AudiobookDetailComponent } from './audiobook-detail.component';
import { AudiobookService } from '../shared/audiobook.service';

describe('AudiobookDetailComponent', () => {
  let component: AudiobookDetailComponent;
  let fixture: ComponentFixture<AudiobookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        JsonpModule,
        RouterTestingModule
      ],
      declarations: [AudiobookDetailComponent],
      providers: [AudiobookService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
