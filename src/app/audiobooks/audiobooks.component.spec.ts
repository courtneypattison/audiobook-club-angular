import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AudiobooksComponent } from './audiobooks.component';

describe('AudiobooksComponent', () => {
  let component: AudiobooksComponent;
  let fixture: ComponentFixture<AudiobooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AudiobooksComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create audiobooks', () => {
    expect(component).toBeTruthy();
  });
});
