import { Injectable } from '@angular/core';
import { Reclamo } from '../Interface/reclamo';
import { ResolveHookContext } from 'module';
@Injectable({
  providedIn: 'root',
})
export class ReclamoInfoService {
  constructor() {}
  reclamosPrueba: Reclamo[] = [
    {
      nombreEquipo: 'PO-0438',
      sectorId: 3,
      nroReclamo: '0001',
      fechaCreacion: new Date(2022, 9, 12),
      fechaUltimaModificacion: new Date(2023, 9, 12),
      solicitante: 'Carlo Barreiro',
      gerencia: 'Gerencia de Soporte',
      telefono: '123456789',
      detalleIngreso: 'Detalle de prueba',
    },
    {
      nombreEquipo: 'PO-0431',
      sectorId: 3,
      nroReclamo: '0002',
      fechaCreacion: new Date(2022, 8, 15),
      fechaUltimaModificacion: new Date(2023, 11, 12),
      solicitante: 'Daniel Trolazo',
      gerencia: 'Gerencia de Soporte',
      telefono: '123456789',
      detalleIngreso: 'Detalle de prueba',
    },
    {
      nombreEquipo: 'PO-0432',
      sectorId: 3,
      nroReclamo: '0003',
      fechaCreacion: new Date(2022, 7, 22),
      fechaUltimaModificacion: new Date(2023, 11, 12),
      solicitante: 'Paulo Spaciuk',
      gerencia: 'Gerencia de Soporte',
      telefono: '123456789',
      detalleIngreso: 'Detalle de prueba',
    },
    {
      nombreEquipo: 'PO-0433',
      sectorId: 3,
      nroReclamo: '0004',
      fechaCreacion: new Date(2022, 6, 16),
      fechaUltimaModificacion: new Date(2023, 8, 22),
      solicitante: 'Paulo Spaciuk',
      gerencia: 'Gerencia de Soporte',
      telefono: '123456789',
      detalleIngreso: 'Detalle de prueba',
    },
    {
      nombreEquipo: 'PO-0434',
      sectorId: 3,
      nroReclamo: '0005',
      fechaCreacion: new Date(2022, 5, 12),
      fechaUltimaModificacion: new Date(2023, 1, 11),
      solicitante: 'Isaac Terleski',
      gerencia: 'Gerencia de Soporte',
      telefono: '123456789',
      detalleIngreso: 'Detalle de prueba',
    },
    {
      nombreEquipo: 'I-0435',
      sectorId: 5,
      nroReclamo: '0006',
      fechaCreacion: new Date(2022, 3, 21),
      fechaUltimaModificacion: new Date(2023, 4, 4),
      solicitante: 'Juan Malcedo',
      gerencia: 'Gerencia de Soporte',
      telefono: '123456789',
      detalleIngreso: 'Detalle de prueba',
    },
    {
      nombreEquipo: 'SV-0105',
      sectorId: 1,
      nroReclamo: '0007',
      fechaCreacion: new Date(2022, 1, 1),
      fechaUltimaModificacion: new Date(2023, 10, 12),
      solicitante: 'Cristian Lozano',
      gerencia: 'Gerencia de Soporte',
      telefono: '123456789',
      detalleIngreso: 'Detalle de prueba',
    },
    {
      nombreEquipo: 'SV-0105',
      sectorId: 1,
      nroReclamo: '0008',
      fechaCreacion: new Date(2022, 1, 1),
      fechaUltimaModificacion: new Date(2023, 10, 20),
      solicitante: 'Marcos Maidana',
      gerencia: 'Gerencia de Soporte',
      telefono: '123456789',
      detalleIngreso: 'Detalle de prueba',
    },
  ];

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

  getReclamo(id: string): Reclamo | undefined {
    for (const reclamo of this.reclamosPrueba) {
      if (reclamo.nroReclamo === id) {
        return reclamo;
      }
    }
    return undefined;
  }
}
