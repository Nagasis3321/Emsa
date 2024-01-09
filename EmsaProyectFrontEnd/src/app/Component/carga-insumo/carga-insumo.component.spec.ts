import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaInsumoComponent } from './carga-insumo.component';

describe('CargaInsumoComponent', () => {
  let component: CargaInsumoComponent;
  let fixture: ComponentFixture<CargaInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargaInsumoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargaInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
