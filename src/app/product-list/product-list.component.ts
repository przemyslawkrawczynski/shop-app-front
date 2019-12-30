import { Component, OnInit } from '@angular/core';
import { ProductRestService } from '../services/product-rest.service';
import { Product } from 'src/app/product/product.component';
import { CategoryRestService, Category } from '../services/category-rest.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = new Array<Product>();
  categoryList: Category[] = new Array<Category>();

  constructor(private productRestService: ProductRestService, private categoryRestService: CategoryRestService) {
  }

  ngOnInit() {
    this.getActualProducts();
    this.getActualCategories();
  }



  getActualProducts() {
    this.productRestService.getProducts()
    .subscribe(actualList => this.productList = actualList);
    console.log('Aktualna lista produktów: ' + this.productList.length);
  }

  getActualCategories() {
    this.categoryRestService.getCategories()
    .subscribe(actualList => this.categoryList = actualList);
    console.log('Aktualna lista kategorii: ' + this.categoryList.length);
  }

}
