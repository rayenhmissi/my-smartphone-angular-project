import { Routes } from '@angular/router';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { smartphone } from './model/smartphone.model';
import { UpdateSmartphoneComponent } from './update-smartphone/update-smartphone.component';
export const routes: Routes = [
    {path:"Produits", component:SmartphoneComponent},
    {path:"add-produits", component:smartphone},
    {path:"", redirectTo:"produits", pathMatch:"full"},
    {path:"updatesmartphone/:id",component:UpdateSmartphoneComponent},
];
