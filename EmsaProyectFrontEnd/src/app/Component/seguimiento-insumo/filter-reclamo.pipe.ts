import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterReclamo',
  standalone: true,
  pure: false, // Haciendo el filtro impuro para que se actualice en tiempo real
})
export class FilterReclamoPipe implements PipeTransform {
  transform(
    reclamos: {
      nombreEquipo: string;
      sectorId: number;
      nroReclamo: string;
      fechaCreacion?: Date | '';
      fechaUltimaModificacion?: Date | '';
      solicitante: string;
    }[],
    filterObj: {
      sectorId?: number;
      nombreEquipo?: string;
      nroReclamo?: string;
      fechaUltimaModificacion?: Date | '';
      solicitante?: string;
    }
  ): any[] {
    return reclamos.filter((reclamo) => {
      return (
        this.filtrarPorSector(reclamo, filterObj.sectorId) &&
        this.filtrarPorNombreEquipo(reclamo, filterObj.nombreEquipo) &&
        this.filtrarPorNroReclamo(reclamo, filterObj.nroReclamo) &&
        this.filtrarPorFechaUltimaModificacion(
          reclamo,
          filterObj.fechaUltimaModificacion
        ) &&
        this.filtrarPorSolicitante(reclamo, filterObj.solicitante)
      );
    });
  }

  // Filtrar por sector
  private filtrarPorSector(reclamo: any, sectorId?: number): boolean {
    return !sectorId || reclamo.sectorId === sectorId;
  }

  // Filtrar por nombre de equipo
  private filtrarPorNombreEquipo(reclamo: any, nombreEquipo?: string): boolean {
    return !nombreEquipo || reclamo.nombreEquipo.includes(nombreEquipo);
  }

  // Filtrar por número de reclamo
  private filtrarPorNroReclamo(reclamo: any, nroReclamo?: string): boolean {
    return !nroReclamo || reclamo.nroReclamo.includes(nroReclamo);
  }

  // Filtrar por fecha de última modificación
  private filtrarPorFechaUltimaModificacion(
    reclamo: any,
    fechaUltimaModificacion?: Date | ''
  ): boolean {
    if (!fechaUltimaModificacion) {
      return true; // No se aplica el filtro
    }

    // Obtener la fecha de reclamo como objeto Date
    const fechaReclamo = new Date(reclamo.fechaUltimaModificacion);

    // Comparar solo año, mes y día
    return (
      fechaUltimaModificacion.getFullYear() === fechaReclamo.getFullYear() &&
      fechaUltimaModificacion.getMonth() === fechaReclamo.getMonth() &&
      fechaUltimaModificacion.getDate() === fechaReclamo.getDate()
    );
  }

  // Filtrar por solicitante
  private filtrarPorSolicitante(reclamo: any, solicitante?: string): boolean {
    return !solicitante || reclamo.solicitante.includes(solicitante);
  }
}
