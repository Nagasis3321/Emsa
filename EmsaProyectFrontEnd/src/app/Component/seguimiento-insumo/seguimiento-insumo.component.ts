import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seguimiento-insumo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seguimiento-insumo.component.html',
  styleUrl: './seguimiento-insumo.component.scss',
})
export class SeguimientoInsumoComponent {
  sectorSeleccionado: String = '';

  reclamos = [
    {
      nombreEquipo: 'PO-0438',
      nroReclamo: '0001',
      fechaCreacion: new Date(2022, 9, 12),
      fechaUltimaModificacion: new Date(2023, 9, 12),
      solicitante: 'Carlo Barreiro',
    },
    {
      nombreEquipo: 'PO-0431',
      nroReclamo: '0002',
      fechaCreacion: new Date(2022, 8, 15),
      fechaUltimaModificacion: new Date(2023, 11, 12),
      solicitante: 'Daniel Trolazo',
    },
    {
      nombreEquipo: 'PO-0432',
      nroReclamo: '0003',
      fechaCreacion: new Date(2022, 7, 22),
      fechaUltimaModificacion: new Date(2023, 12, 12),
      solicitante: 'Paulo Spaciuk',
    },
    {
      nombreEquipo: 'PO-0433',
      nroReclamo: '0004',
      fechaCreacion: new Date(2022, 6, 16),
      fechaUltimaModificacion: new Date(2023, 8, 22),
      solicitante: 'Paulo Spaciuk',
    },
    {
      nombreEquipo: 'PO-0434',
      nroReclamo: '0005',
      fechaCreacion: new Date(2022, 5, 12),
      fechaUltimaModificacion: new Date(2023, 1, 11),
      solicitante: 'Isaac Terleski',
    },
    {
      nombreEquipo: 'I-0435',
      nroReclamo: '0006',
      fechaCreacion: new Date(2022, 3, 21),
      fechaUltimaModificacion: new Date(2023, 4, 4),
      solicitante: 'Juan Malcedo',
    },
    {
      nombreEquipo: 'CV-0105',
      nroReclamo: '0007',
      fechaCreacion: new Date(2022, 1, 1),
      fechaUltimaModificacion: new Date(2023, 3, 12),
      solicitante: 'Cristian Lozano',
    },
    {
      nombreEquipo: 'SV-0105',
      nroReclamo: '0008',
      fechaCreacion: new Date(2022, 1, 1),
      fechaUltimaModificacion: new Date(2023, 18, 20),
      solicitante: 'Marcos Maidana',
    },
  ];
  sectores: { id: number; name: string; nomenclatura: string }[] = [
    { id: 1, name: 'San Vicente', nomenclatura: 'SV' },
    { id: 2, name: 'Jardin America', nomenclatura: 'JA' },
    { id: 3, name: 'Posadas', nomenclatura: 'PO' },
    { id: 4, name: 'Campo Grande', nomenclatura: 'CG' },
    { id: 5, name: 'Iguazu', nomenclatura: 'I' },
  ];
}
