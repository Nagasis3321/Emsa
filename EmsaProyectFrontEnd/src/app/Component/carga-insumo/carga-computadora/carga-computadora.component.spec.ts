import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaComputadoraComponent } from './carga-computadora.component';

describe('CargaComputadoraComponent', () => {
  let component: CargaComputadoraComponent;
  let fixture: ComponentFixture<CargaComputadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargaComputadoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargaComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
