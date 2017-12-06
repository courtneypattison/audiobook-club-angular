import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    debug = fixture.debugElement.query(By.css('header'));
    element = debug.nativeElement;

    fixture.detectChanges();
  });

  it('should create the header', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    fixture.detectChanges();
    expect(element.textContent).toContain(component.title);
  });
});
