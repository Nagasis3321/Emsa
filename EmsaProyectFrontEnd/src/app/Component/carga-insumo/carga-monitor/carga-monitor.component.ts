import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carga-monitor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carga-monitor.component.html',
  styleUrl: './carga-monitor.component.scss',
})
export class CargaMonitorComponent {
  solicitante: string = '';
  gerencia: string = '';
  telefono: string = '';
  nombreEquipo: string = '';
  idOrdenReclamo: number = 0;
  detalleIngreso: string = '';
  nroSerie: string = '';
  sectores: { id: number; name: string; nomenclatura: string }[] = [
    { id: 1, name: 'San Vicente', nomenclatura: 'SV' },
    { id: 2, name: 'Jardin America', nomenclatura: 'JA' },
    { id: 3, name: 'Posadas', nomenclatura: 'PO' },
    { id: 4, name: 'Campo Grande', nomenclatura: 'CG' },
    { id: 5, name: 'Iguazu', nomenclatura: 'I' },
  ];
  sectorSeleccionado: { id: number; name: string; nomenclatura: string } = {
    id: 3,
    name: 'Posadas',
    nomenclatura: 'PO',
  };

  cargarImpresora() {}
  limpiar(): void {}
}
