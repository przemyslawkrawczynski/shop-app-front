import { Component, OnInit } from '@angular/core';
import { ProductRestService } from '../services/product-rest.service';
import { Product } from 'src/app/product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = new Array<Product>();

  constructor(private productRestService: ProductRestService) {
  }

  ngOnInit() {
    this.getActualProducts();
  }

  getActualProducts() {
    this.productRestService.getProducts()
    .subscribe(actualList => this.productList = actualList);
    console.log('Aktualna lista produktów: ' + this.productList.length);
  }

}
