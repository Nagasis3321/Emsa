import { Component, Inject, Input, OnChanges } from '@angular/core';
import { ReclamoInfoService } from '../../../Service/reclamo-info.service';
import { Reclamo } from '../../../Interface/reclamo';
import { Sector } from '../../../Interface/sector';

@Component({
  selector: 'app-reclamo-info',
  templateUrl: './reclamo-info.component.html',
  styleUrls: ['./reclamo-info.component.scss'],
  standalone: true,
})
export class ReclamoInfoComponent {
  @Input() idReclamo: string = '';

  constructor(private reclamoService: ReclamoInfoService) {}

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
}
