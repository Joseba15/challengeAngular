import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {


  @Input() productData!: Product ;

  


}
