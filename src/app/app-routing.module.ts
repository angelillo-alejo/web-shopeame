import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  //Es aqui donde se establecen las rutas: Home, Poducts, Gestion
const routes: Routes = [
  
  {path: "", loadChildren: () =>
  import('./pages/home/home.module').then(m => m.HomeModule)
  },

  {path: "products", loadChildren: () =>
  import('./pages/products/products.module').then(m => m.ProductsModule)
  },
  {path: "gestion", loadChildren: () =>
  import('./pages/gestion/gestion.module').then(m => m.GestionModule)
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
