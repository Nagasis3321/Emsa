import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

import { ReclamoInfoService } from '../../../Service/reclamo-info.service';
import { Reclamo } from '../../../Interface/reclamo';
import { Sector } from '../../../Interface/sector';
import { FormatDatePipe } from '../../../Pipes/format-date.pipe';
import { CommonModule } from '@angular/common';

// Importamos la librería PDFMake
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ReclamoPDFService } from '../../../Service/reclamo-pdf.service';

// Registramos las fuentes de PDFMake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reclamo-info',
  imports: [FormatDatePipe, CommonModule],
  templateUrl: './reclamo-info.component.html',
  styleUrls: ['./reclamo-info.component.scss'],
  standalone: true,
})
export class ReclamoInfoComponent {
  @Input() idReclamo: string = '';
  @Output() cancelarEvent = new EventEmitter<boolean>();
  constructor(
    private reclamoService: ReclamoInfoService,
    private pdfReclamoService: ReclamoPDFService
  ) {}

  reclamo: Reclamo | undefined;

  sectores: Sector[] = [
    { id: 1, name: 'San Vicente', nomenclatura: 'SV' },
    { id: 2, name: 'Jardin America', nomenclatura: 'JA' },
    { id: 3, name: 'Posadas', nomenclatura: 'PO' },
    { id: 4, name: 'Campo Grande', nomenclatura: 'CG' },
    { id: 5, name: 'Iguazu', nomenclatura: 'I' },
  ];

  sector: Sector | undefined;

  ngOnInit() {
    this.reclamo = this.reclamoService.getReclamo(this.idReclamo);
    this.sector = this.sectores.find(
      (sector) => this.reclamo?.sectorId === sector.id
    );
  }

  ngOnChanges(): void {
    this.reclamo = this.reclamoService.getReclamo(this.idReclamo);
    this.sector = this.sectores.find(
      (sector) => this.reclamo?.sectorId === sector.id
    );
  }

  modificar() {}

  imprimir() {
    let pdfDocs = this.pdfReclamoService.convertirReclamoAPdf(
      this.reclamo!,
      this.sector.name
    );
    pdfDocs.download(
      this.reclamo.nroReclamo + this.reclamo.nombreEquipo + '.pdf'
    );
  }

  regresar(): void {
    this.cancelarEvent.emit(false);
  }
}
