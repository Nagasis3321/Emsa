import { Component } from '@angular/core';

@Component({
  selector: 'app-carga-computadora',
  standalone: true,
  imports: [],
  templateUrl: './carga-computadora.component.html',
  styleUrl: './carga-computadora.component.scss'
})
export class CargaComputadoraComponent {


  //Variables carga accesorio
  perifericosSeleccionado:string="";
  descripcionAccesorio:string="";
//Variable listado accesorio
  listAccesorio=[{id:1,name:"mouse"},{id:2,name:"teclado"},{id:3,name:"monitor"},{id:4,name:"parlante"},{id:5,name:"Usb red"}];

  addAccesorio(){

  }
}
