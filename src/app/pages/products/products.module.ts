import { PipesModule } from './../pipes/pipes.module';
import { GalleryComponent } from './../../shared/components/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PipesModule,
  ]
})
export class ProductsModule { }