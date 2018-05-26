import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Installer1Component } from './installer1.component';

describe('Installer1Component', () => {
  let component: Installer1Component;
  let fixture: ComponentFixture<Installer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Installer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Installer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
