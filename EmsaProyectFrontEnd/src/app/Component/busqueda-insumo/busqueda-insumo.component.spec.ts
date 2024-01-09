import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaInsumoComponent } from './busqueda-insumo.component';

describe('BusquedaInsumoComponent', () => {
  let component: BusquedaInsumoComponent;
  let fixture: ComponentFixture<BusquedaInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaInsumoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusquedaInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
