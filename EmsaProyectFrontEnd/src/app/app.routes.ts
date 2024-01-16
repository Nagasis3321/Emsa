import { Routes } from '@angular/router';
import { CargaInsumoComponent } from './Component/carga-insumo/carga-insumo.component';
import { BusquedaInsumoComponent } from './Component/busqueda-insumo/busqueda-insumo.component';
import { SeguimientoInsumoComponent } from './Component/seguimiento-insumo/seguimiento-insumo.component';
import { NewSectorComponent } from './Component/new-sector/new-sector.component';

export const routes: Routes = [
  {
    path: 'Carga',
    component: CargaInsumoComponent,
  },
  {
    path: 'Busqueda',
    component: BusquedaInsumoComponent,
  },
  {
    path: 'Seguimiento',
    component: SeguimientoInsumoComponent,
  },
  {
    path: 'Sectores',
    component: NewSectorComponent,
  },
];
