import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaImpresoraComponent } from './carga-impresora.component';

describe('CargaImpresoraComponent', () => {
  let component: CargaImpresoraComponent;
  let fixture: ComponentFixture<CargaImpresoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargaImpresoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargaImpresoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
