import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartphoneService } from '../service-smartphone/smartphone.service';
import { smartphone } from '../model/smartphone.model';
import { SmartphoneComponent } from '../smartphone/smartphone.component';

@Component({
  selector: 'app-your-component', // Replace with your actual component selector
  templateUrl: './update-smartphone.component.html',
})
export class UpdateSmartphoneComponent {
  constructor(
    private activateRoutes: ActivatedRoute,
    private smartphoneService: SmartphoneService,
    private Router:router,
  ) {}

  updatesmartphone(updatedSmartphone: SmartphoneComponent) {
    this.supprimersmartphone();
    this.ajoutersmartphone();
  }
  currentSmartphone: smartphone = new smartphone();
  this.smartphoneService.updatesmartphone();
  this.router.navigate("smartphone");
  ngOnInit() {
    const id = this.activateRoutes.snapshot.params['id'];
    this.currentSmartphone = this.smartphoneService.consultersmartphone(id);
  }
}
