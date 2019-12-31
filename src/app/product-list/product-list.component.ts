import { Component, OnInit } from '@angular/core';
import { ProductRestService } from '../services/product-rest.service';
import { Product } from 'src/app/product/product.component';
import { CategoryRestService, Category } from '../services/category-rest.service';
import { splitClasses } from '@angular/compiler';

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

  onMouseEnter(event) {
    event.target.classList.value = 'text-primary';
  }

  onMouseLeave(event) {
    event.target.classList.value = 'text-secondary';
  }

  getActualProducts() {
    this.productRestService.getProducts()
    .subscribe(actualList => this.productList = actualList);
    console.log('Aktualna lista produktów: ' + this.productList.length);
  }

  getProductsByCategory(categoryId) {
    this.productRestService.getProductsByCategory(categoryId)
    .subscribe(actualList => this.productList = actualList);
  }

  getActualCategories() {
    this.categoryRestService.getCategories()
    .subscribe(actualList => this.categoryList = actualList);
  }

}
