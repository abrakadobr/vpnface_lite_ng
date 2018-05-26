import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpnuserdialogComponent } from './vpnuserdialog.component';

describe('VpnuserdialogComponent', () => {
  let component: VpnuserdialogComponent;
  let fixture: ComponentFixture<VpnuserdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpnuserdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpnuserdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
