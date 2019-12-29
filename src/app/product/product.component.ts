import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  ngOnInit() {
  }

}

export interface Product {
    id: number;
    name: string;
    description: string;
    storageQuantity: number;
    price: number;
    categoryId: number;
    categoryName: string;
}
