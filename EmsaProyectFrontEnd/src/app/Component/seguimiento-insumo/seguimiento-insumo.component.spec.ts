import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoInsumoComponent } from './seguimiento-insumo.component';

describe('SeguimientoInsumoComponent', () => {
  let component: SeguimientoInsumoComponent;
  let fixture: ComponentFixture<SeguimientoInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguimientoInsumoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguimientoInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
