import { ReactiveFormsModule } from '@angular/forms';
import { GestionComponent } from './gestion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';



@NgModule({
  declarations: [
  GestionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
