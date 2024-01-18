export interface Reclamo {
  nombreEquipo: string;
  sectorId: number;
  nroReclamo: string;
  fechaCreacion?: Date;
  fechaUltimaModificacion?: Date;
  solicitante: string;
  detalleIngreso: string;
  gerencia: string;
  telefono: string;
}
