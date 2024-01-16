import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-sector',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './delete-sector.component.html',
  styleUrl: './delete-sector.component.scss'
})
export class DeleteSectorComponent {
  nameSector:string="";
  errorSectorExist:boolean=false;
  errorText:string="" // text error message
  newSector():void{

  }
}
