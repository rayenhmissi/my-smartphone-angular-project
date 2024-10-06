import { Injectable } from '@angular/core';
import { smartphone } from '../model/smartphone.model';
@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  private smartphones: smartphone[] = [{
    idsmartphone: 11,
    modelsmartphone: 'redmi note 13',
    ram: 8,
    stockage: 256,
    prixsmartphone: 850,
    datecreationsmartphone: new Date('10/20/2023'),
  }];

  constructor() {
    this.listSmartphones();
  }

  listSmartphones() {
    // You should return the list of smartphones here
    return this.smartphones;
  }

  ajouterSmartphone(smart: smartphone) {
    this.smartphones.push(smart);
  }

  supprimerSmartphone(id: number) {
    const index = this.smartphones.findIndex(smart => smart.idsmartphone === id);
    if (index > -1) {
      this.smartphones.splice(index, 1);
    }
  }

  consultersmartphone(id: number) {
    return this.smartphones.find(smart => smart.idsmartphone === id);
  }
  Triersmartphone(){
    this.smartphones=this.smartphones.sort(n1:Number,n2 :Number)=>{
    if (n1.idsmartphone ==n2.idsmartphone) {
    return 1;
    }
    else{
    return - 1;
    }
    return 0;
    }
}