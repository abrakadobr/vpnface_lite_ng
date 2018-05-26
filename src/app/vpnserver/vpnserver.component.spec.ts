import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpnserverComponent } from './vpnserver.component';

describe('VpnserverComponent', () => {
  let component: VpnserverComponent;
  let fixture: ComponentFixture<VpnserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpnserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpnserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
