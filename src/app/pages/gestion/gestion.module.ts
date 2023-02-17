import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { GalleryComponent } from 'src/app/shared/components/gallery/gallery.component';


@NgModule({
  declarations: [
    GestionComponent,
  ],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
