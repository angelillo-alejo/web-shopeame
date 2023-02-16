import { ShopeameServicesService } from 'src/app/shared/services/shopeame-services.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() index: number = -1;
  @Input() products: any = {
    id: '',
    name: '',
    price: '',
    description: '',
    stars: 0,
    image: ''
  }
  constructor(private shopeameServicesService: ShopeameServicesService) { }
  ngOnInit(): void {
  }
  put(id: string){
    this.shopeameServicesService.getProductById(id).subscribe((res: any) => {
      this.shopeameServicesService.product = res;
    });
  }

  delete(id: string) {
    this.shopeameServicesService.deleteProduct(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }
}



