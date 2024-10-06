import { Component } from '@angular/core';
import { smartphone } from '../model/smartphone.model';
@Component({

  selector: 'app-ajout-smartphone',
  standalone: true,
  imports: [],
  templateUrl: './ajout-smartphone.component.html',
})
export class AjoutSmartphoneComponent {
  smartphone : String[] ;
  newsmartphone=new smartphone();
  message: String="smartphone ajouté avec success";
  constructor() {
  this.smartphone=["samsung","redmi","oppo"];
  }
  ajoutsmartphone() {
    this.ajoutsmartphone();
    this.message="smartphone ajouté avec success";
  }
}
