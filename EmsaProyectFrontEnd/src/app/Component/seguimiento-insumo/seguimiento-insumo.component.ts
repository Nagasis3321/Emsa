import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterReclamoPipe } from './filter-reclamo.pipe';
import { FormatDatePipe } from '../../Pipes/format-date.pipe';
import { ReclamoInfoComponent } from './reclamo-info/reclamo-info.component';

@Component({
  selector: 'app-seguimiento-insumo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FilterReclamoPipe,
    FormatDatePipe,
    ReclamoInfoComponent,
  ],
  templateUrl: './seguimiento-insumo.component.html',
  styleUrl: './seguimiento-insumo.component.scss',
})
export class SeguimientoInsumoComponent {
  nroReclamo: string = '';
  solicitante: string = '';
  nombreEquipo: string = '';
  reclamoIdForChildren: string = '';
  reclamoInfoBoolean: boolean = false;
  fechaCreacion: Date | undefined = undefined;
  fechaUltimaModificacionString: string | undefined = undefined;
  fechaUltimaModificacion: Date | undefined = undefined;
  sectorSeleccionado: { id: number; name: string; nomenclatura: string } = {
    id: 3,
    name: 'Posadas',
    nomenclatura: 'PO',
  };

  reclamos = [
    {
      nombreEquipo: 'PO-0438',
      sectorId: 3,
      nroReclamo: '0001',
      fechaCreacion: new Date(2022, 9, 12),
      fechaUltimaModificacion: new Date(2023, 9, 12),
      solicitante: 'Carlo Barreiro',
    },
    {
      nombreEquipo: 'PO-0431',
      sectorId: 3,
      nroReclamo: '0002',
      fechaCreacion: new Date(2022, 8, 15),
      fechaUltimaModificacion: new Date(2023, 11, 12),
      solicitante: 'Daniel Trolazo',
    },
    {
      nombreEquipo: 'PO-0432',
      sectorId: 3,
      nroReclamo: '0003',
      fechaCreacion: new Date(2022, 7, 22),
      fechaUltimaModificacion: new Date(2023, 11, 12),
      solicitante: 'Paulo Spaciuk',
    },
    {
      nombreEquipo: 'PO-0433',
      sectorId: 3,
      nroReclamo: '0004',
      fechaCreacion: new Date(2022, 6, 16),
      fechaUltimaModificacion: new Date(2023, 8, 22),
      solicitante: 'Paulo Spaciuk',
    },
    {
      nombreEquipo: 'PO-0434',
      sectorId: 3,
      nroReclamo: '0005',
      fechaCreacion: new Date(2022, 5, 12),
      fechaUltimaModificacion: new Date(2023, 1, 11),
      solicitante: 'Isaac Terleski',
    },
    {
      nombreEquipo: 'I-0435',
      sectorId: 5,
      nroReclamo: '0006',
      fechaCreacion: new Date(2022, 3, 21),
      fechaUltimaModificacion: new Date(2023, 4, 4),
      solicitante: 'Juan Malcedo',
    },
    {
      nombreEquipo: 'SV-0105',
      sectorId: 1,
      nroReclamo: '0007',
      fechaCreacion: new Date(2022, 1, 1),
      fechaUltimaModificacion: new Date(2023, 10, 12),
      solicitante: 'Cristian Lozano',
    },
    {
      nombreEquipo: 'SV-0105',
      sectorId: 1,
      nroReclamo: '0008',
      fechaCreacion: new Date(2022, 1, 1),
      fechaUltimaModificacion: new Date(2023, 10, 20),
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

  setFechaUltimaModificacion() {
    if (this.fechaUltimaModificacionString) {
      const [year, month, day] = this.fechaUltimaModificacionString.split('-');
      this.fechaUltimaModificacion = new Date(+year, +month - 1, +day);
    } else {
      this.fechaUltimaModificacion = undefined;
    }
  }

  viewInfoReclamo(reclamoId: string): void {
    //Obtener info del reclamo con el ID

    //Mostramos componente del viewInfoComponente, con informacion del componente
    this.reclamoInfoBoolean = true;
    this.reclamoIdForChildren = reclamoId;
  }
  closeViewInfoReclamo(estado: boolean): void {
    this.reclamoInfoBoolean = estado;
  }
}
