import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopeameServicesService {

  private url = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products';

  product = {
    id: '',
    name: '',
    price: '',
    description: '',
    image: '',
  }

  products? = [];

  constructor(private http: HttpClient) { }
  //GET: devuelve informacion
  getProducts(){
    return this.http.get(this.url);
  }
  //POST: envía información normalmente para crear o ejecutar acciones sobre recursos en bases de datos.
  postProduct(product: any){
    return this.http.post(this.url, product);
  }

  getProductById(id: any){
    return this.http.get(this.url + '/' + id);
  }
  //PUT: envía información al endpoint y se modifica en base de datos un recurso.
  putProduct(product: any){
    return this.http.put(this.url + '/' + product.id, product);
  }
  //PUT: para borrar recursos del servidor
  deleteProduct(id: string){
    return this.http.delete(this.url + '/' + id);
  }
}


