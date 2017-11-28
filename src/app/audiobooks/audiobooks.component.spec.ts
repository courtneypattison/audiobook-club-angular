import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { JsonpModule } from '@angular/http';

import { AudiobooksComponent } from './audiobooks.component';
import { AudiobookService } from './shared/audiobook.service';

describe('AudiobooksComponent', () => {
  let component: AudiobooksComponent;
  let fixture: ComponentFixture<AudiobooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        JsonpModule,
        RouterTestingModule
      ],
      declarations: [AudiobooksComponent],
      providers: [AudiobookService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
