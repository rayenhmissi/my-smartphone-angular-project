import { Component } from '@angular/core';
import { smartphone } from '../model/smartphone.model';

@Component({
  selector: 'app-smartphone',
  standalone: true,
  imports: [],
  templateUrl: './smartphone.component.html',
})
export class SmartphoneComponent {
modifiersmartphone(_t9: any) {
throw new Error('Method not implemented.');
}
  smartphone: smartphone[];
  supprimersmartphone(smart:smartphone){
    let c=confirm("ètes vous sur?");
    if (c){
      this.supprimersmartphone(smart);
    }
  }
  constructor() {
    this.smartphone = [
      {
        idsmartphone: 10,
        modelsmartphone: 'iphone 16',
        ram: 8,
        stockage: 128,
        prixsmartphone: 4500,
        datecreationsmartphone: new Date('09/10/2024'),
      },
      {
        idsmartphone: 11,
        modelsmartphone: 'redmi note 13',
        ram: 8,
        stockage: 256,
        prixsmartphone: 850,
        datecreationsmartphone: new Date('10/20/2023'),
      },
      {
        idsmartphone: 12,
        modelsmartphone: 'galaxy a15',
        ram: 6,
        stockage: 128,
        prixsmartphone: 800,
        datecreationsmartphone: new Date('09/21/2022'), // Corrected the year
      },
    ];
  }
}
