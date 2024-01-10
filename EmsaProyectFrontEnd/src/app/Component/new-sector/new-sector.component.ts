import { Component } from '@angular/core';
import { CreateSectorComponent } from './create-sector/create-sector.component';
import { DeleteSectorComponent } from './delete-sector/delete-sector.component';
import { ModifySectorComponent } from './modify-sector/modify-sector.component';
import { FindSectorComponent } from './find-sector/find-sector.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-sector',
  standalone: true,
  imports: [CreateSectorComponent,DeleteSectorComponent,ModifySectorComponent,FindSectorComponent,CommonModule,FormsModule],
  templateUrl: './new-sector.component.html',
  styleUrl: './new-sector.component.scss'
})
export class NewSectorComponent {
  optionCompontent:"New"| "Modify" |"Find" |"Delete" = "Modify";

  cargaComponent(option:"New"| "Modify" |"Find" |"Delete" ):void {
    this.optionCompontent=option;
  }
}
