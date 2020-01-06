import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: CartItem;
  @Input()
  index: number;

  constructor() {}

  ngOnInit() {
  }

}

export interface CartItem {
  id: number;
  productDto: Product;
  quantity: number;
  itemValue: number;
}


