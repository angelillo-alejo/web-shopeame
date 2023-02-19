import { ShopeameServicesService } from 'src/app/shared/services/shopeame-services.service';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'app-gestion',
templateUrl: './gestion.component.html',
styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {

  //declaramos el form
    creationform! : FormGroup; 


    constructor(private formbuilder:FormBuilder, private shopeameServicesService: ShopeameServicesService){}
    public ProductsNew = this.shopeameServicesService.product;

    //lo que va inicializar, llama al formulario
    ngOnInit(): void{
    this.creationform =this.formbuilder.group({
    name:[this.ProductsNew.name,[Validators.required,Validators.minLength(5)]],
    price:[this.ProductsNew.price,[Validators.required]],
    description:[this.ProductsNew.description,[Validators.required,Validators.maxLength(20)]],
    image:[this.ProductsNew.image,[Validators.required]],
});
this.creationform.valueChanges.subscribe(changes=>{
this.ProductsNew = changes
});

}
public onSubmit(){
console.log(this.ProductsNew);
}
}
