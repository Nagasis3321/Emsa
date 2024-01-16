import { CommonModule } from '@angular/common';
import {  Component, OnChanges } from '@angular/core';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-find-sector',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './find-sector.component.html',
  styleUrl: './find-sector.component.scss',


})
export class FindSectorComponent  implements OnChanges{
constructor() {}

ngOnChanges(): void {
  this.buscarSectores();
}


  nombreSector:string="";
  sectores=[
  {id:1,name:"Procesamiento"},
  {id:2,name:"Servicio Generales"},
  {id:3,name:"Sistemas"},
  {id:4,name:"Atencion al publico"},
  {id:5,name:"Call Center"},  
  {id:1,name:"Procesamiento"},
  {id:2,name:"Servicio Generales"},
  {id:3,name:"Sistemas"},
  {id:4,name:"Atencion al publico"},
  {id:5,name:"Call Center"},  
  {id:1,name:"Procesamiento"},
  {id:2,name:"Servicio Generales"},
  {id:3,name:"Sistemas"},
  {id:4,name:"Atencion al publico"},
  {id:5,name:"Call Center"},  
]
sectoresMostrados=this.sectores;

  buscarSectores() {
    if (this.nombreSector.trim() === '') {
      // Si el campo de búsqueda está vacío, muestra todos los sectores
      this.sectores = this.sectores;
    } else {
      // Filtra los sectores que coincidan con el nombre ingresado
      this.sectoresMostrados = this.sectores.filter(
        (sector) =>
          sector.name.toLowerCase().includes(this.nombreSector.toLowerCase())
      );
    } 

  }

  
}