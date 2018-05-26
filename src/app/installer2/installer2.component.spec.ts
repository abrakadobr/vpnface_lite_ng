import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Installer2Component } from './installer2.component';

describe('Installer2Component', () => {
  let component: Installer2Component;
  let fixture: ComponentFixture<Installer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Installer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Installer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
