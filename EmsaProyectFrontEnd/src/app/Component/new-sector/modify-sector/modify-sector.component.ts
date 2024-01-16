import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-sector',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modify-sector.component.html',
  styleUrl: './modify-sector.component.scss'
})
export class ModifySectorComponent {
  nameSector:string="";
  nameModifySector:string="";

  modifySector(){

  }
}
