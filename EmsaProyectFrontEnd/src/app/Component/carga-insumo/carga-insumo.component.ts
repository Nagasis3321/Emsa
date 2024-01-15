import { Component } from '@angular/core';
import { CargaImpresoraComponent } from './carga-impresora/carga-impresora.component';
import { CargaComputadoraComponent } from './carga-computadora/carga-computadora.component';
import { CommonModule } from '@angular/common';
import { CargaMonitorComponent } from './carga-monitor/carga-monitor.component';

@Component({
  selector: 'app-carga-insumo',
  standalone: true,
  imports: [
    CargaMonitorComponent,
    CargaImpresoraComponent,
    CargaComputadoraComponent,
    CommonModule,
  ],
  templateUrl: './carga-insumo.component.html',
  styleUrl: './carga-insumo.component.scss',
})
export class CargaInsumoComponent {
  optionCompontent: 'Impresora' | 'Computadora' | 'Monitor' = 'Impresora';

  cargaComponent(option: 'Impresora' | 'Computadora' | 'Monitor'): void {
    this.optionCompontent = option;
  }
}
