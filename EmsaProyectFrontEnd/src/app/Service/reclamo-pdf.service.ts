import { Injectable } from '@angular/core';
import { ReclamoInfoService } from './reclamo-info.service';
import { getFormattedDate } from '../Interface/Date';
import pdfMake from 'pdfmake/build/pdfmake';
import htmlToPdfMake from 'html-to-pdfmake';
import { Reclamo } from '../Interface/reclamo';
@Injectable({
  providedIn: 'root',
})
export class ReclamoPDFService {
  constructor() {}

  convertirReclamoAPdf(reclamo: any, sectorName: string): any {
    const html = this.crearHtmlReclamo(reclamo, sectorName);

    const pdfDoc = pdfMake.createPdf({
      content: htmlToPdfMake(html),
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [30, 30, 30, 30],
    });

    return pdfDoc;
  }

  crearHtmlReclamo(reclamo: Reclamo, sectorName: string): string {
    let html = '';
    const fecha = getFormattedDate(reclamo.fechaCreacion);
    html += '<h1>Reclamo</h1>';
    html += '<p><strong>Nro Reclamo:</strong> ' + reclamo.nroReclamo + '</p>';
    html += '<p><strong>Gerencia:</strong> ' + reclamo.gerencia + '</p>';
    html += '<p><strong>Sector:</strong> ' + sectorName + '</p>';
    html += '<p><strong>Solicitante:</strong> ' + reclamo.solicitante + '</p>';
    html += '<p><strong>Telefono:</strong> ' + reclamo.telefono + '</p>';
    html += '<p><strong>Fecha solicitud Reclamo:</strong> ' + fecha + '</p>';
    html += '<p><strong>Estado:</strong> ' + reclamo.estado + '</p>';
    html +=
      '<p><strong>Descripción:</strong> ' + reclamo.detalleIngreso + '</p>';
    // Agrega más información del reclamo aquí, según tus necesidades

    return html;
  }
}
