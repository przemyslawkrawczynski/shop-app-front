import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = new Array<Product>();

  constructor() {
    this.productList.push(new Product(1, 'Młotek', 'Młotkowski młotek do wbijania gwoździ', 15, 19.99, 12, 'Narzędzia'));
    this.productList.push(new Product(1, 'Gwoździe', 'Gwoździe do młotka młotkowskiego', 10, 0.99, 12, 'Narzędzia'));
    this.productList.push(new Product(1, 'Siekiera', 'Siekierap z drewienkami', 15, 29.99, 12, 'Narzędzia'));
    this.productList.push(new Product(1, 'Śrubokręt', 'Szybki wkręt do śrubek', 5, 9.99, 12, 'Narzędzia'));
    this.productList.push(new Product(1, 'Szczypce', 'Uniwersalne szczypce do szczypania w tyłek', 11, 17.99, 12, 'Narzędzia'));
    this.productList.push(new Product(1, 'Kombinerki', 'Kombinerki do kombinowania', 10, 12.99, 12, 'Narzędzia'));
    console.log('Liczba narzędzi: ' + this.productList.length);
  }

  ngOnInit() {
  }

}
