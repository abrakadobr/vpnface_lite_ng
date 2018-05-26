import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoglineComponent } from './logline.component';

describe('LoglineComponent', () => {
  let component: LoglineComponent;
  let fixture: ComponentFixture<LoglineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoglineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
