import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpClientComponent } from './help-client.component';

describe('HelpClientComponent', () => {
  let component: HelpClientComponent;
  let fixture: ComponentFixture<HelpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
