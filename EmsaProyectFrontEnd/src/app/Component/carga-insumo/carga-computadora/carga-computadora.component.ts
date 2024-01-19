import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, UntypedFormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ComputerManagerService } from '../../../Service/CargaComputadora/computer-manager.service';
import { Computadora } from '../../../Interface/computadora';
import { getFormattedDate } from '../../../Interface/Date';
@Component({
  selector: 'app-carga-computadora',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './carga-computadora.component.html',
  styleUrl: './carga-computadora.component.scss',
})
export class CargaComputadoraComponent {
  constructor(private computadoraService: ComputerManagerService) {}

  //Variables Carga Computadora
  solicitante: string = '';
  gerencia: string = '';
  telefono: string = '';
  nombreEquipo: string = '';
  idOrdenReclamo: number = 0;
  teamViewer: string = '';
  detalleIngreso: string = '';
  sectorSeleccionado: { id: number; name: string; nomenclatura: string } = {
    id: 3,
    name: 'Posadas',
    nomenclatura: 'PO',
  };
  sectores: { id: number; name: string; nomenclatura: string }[] = [
    { id: 1, name: 'San Vicente', nomenclatura: 'SV' },
    { id: 2, name: 'Jardin America', nomenclatura: 'JA' },
    { id: 3, name: 'Posadas', nomenclatura: 'PO' },
    { id: 4, name: 'Campo Grande', nomenclatura: 'CG' },
    { id: 5, name: 'Iguazu', nomenclatura: 'I' },
  ];

  //Accesorios
  addAccesorioBoolean: boolean = false;
  //Variables carga accesorio
  perifericosSeleccionado: string = '';
  descripcionAccesorio: string = '';
  listAccesorioSelected: { id: number; name: string; discripcion: string }[] =
    [];
  errorCargaAccesorio: boolean = false;
  errorMensageAccesorio: string = '';

  //Variable listado accesorio
  listAccesorio = [
    { id: 1, name: 'Mouse' },
    { id: 2, name: 'Teclado' },
    { id: 3, name: 'Monitor' },
    { id: 4, name: 'Parlante' },
    { id: 5, name: 'Usb red' },
  ];

  addAccesorio(): void {
    if (this.descripcionAccesorio === '') {
      this.errorMensageAccesorio = 'Por favor ingrese una descripción';
      this.errorCargaAccesorio = true;
    } else if (this.perifericosSeleccionado === '') {
      this.errorMensageAccesorio = 'Por favor seleccione un accesorio';
      this.errorCargaAccesorio = true;
    } else {
      const newItem: { id: number; name: string; discripcion: string } = {
        id: this.listAccesorioSelected.length + 1,
        name: this.perifericosSeleccionado,
        discripcion: this.descripcionAccesorio,
      };
      this.listAccesorioSelected.push(newItem);
      this.descripcionAccesorio = '';
      this.errorCargaAccesorio = false;
      this.errorMensageAccesorio = '';
    }
  }

  eliminarAccesorio(index: number): void {
    this.listAccesorioSelected.splice(index, 1);
  }

  cargarComputadora() {
    const putComputadora: Computadora = {
      nombreEquipo: this.nombreEquipo,
      fechaIngreso: getFormattedDate(new Date()),
      teamViewer: this.teamViewer,
    };
    this.computadoraService.putComputadora(putComputadora);
  }

  limpiar(): void {
    this.solicitante = '';
    this.gerencia = '';
    this.telefono = '';
    this.nombreEquipo = '';
    this.detalleIngreso = '';
    this.teamViewer = '';
    this.telefono = '';
    this.listAccesorioSelected = [];
    this.descripcionAccesorio = '';
  }
}
