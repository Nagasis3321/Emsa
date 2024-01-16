import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-sector',
  standalone: true,
  imports: [FormsModule,CommonModule, ],
  templateUrl: './create-sector.component.html',
  styleUrl: './create-sector.component.scss'
})
export class CreateSectorComponent {
  nameSector:string="";
  errorSectorExist:boolean=false;
  errorText:string="" // text error message
  newSector():void{

  }
}
