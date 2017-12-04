import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AudiobookListComponent } from './audiobook-list.component';
import { AudiobookService } from '../shared/audiobook.service';

describe('AudiobookListComponent', () => {
  let component: AudiobookListComponent;
  let fixture: ComponentFixture<AudiobookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientJsonpModule,
        RouterTestingModule
      ],
      declarations: [AudiobookListComponent],
      providers: [AudiobookService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
