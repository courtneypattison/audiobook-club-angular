import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiobookHttpErrorComponent } from './audiobook-http-error.component';

describe('AudiobookHttpErrorComponent', () => {
  let component: AudiobookHttpErrorComponent;
  let fixture: ComponentFixture<AudiobookHttpErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiobookHttpErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobookHttpErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
