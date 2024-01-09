import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaMonitorComponent } from './carga-monitor.component';

describe('CargaMonitorComponent', () => {
  let component: CargaMonitorComponent;
  let fixture: ComponentFixture<CargaMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargaMonitorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargaMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
