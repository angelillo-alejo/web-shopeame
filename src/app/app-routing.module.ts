import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'gestion', component: GestionComponent },

{path: "", loadChildren: () =>
import('./pages/home/home.module').then(m => m.HomeModule)
},

{path: "products", loadChildren: () =>
import('./pages/products/products.module').then(m => m.ProductsModule)
},
{path: "gestión", loadChildren: () =>
import('./pages/gestion/gestion.module').then(m => m.GestionModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
