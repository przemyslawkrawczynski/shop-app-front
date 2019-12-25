import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  product: Product = new Product(5, 'Młotek', 'Młotek młotkowski do wbijania gwoździ', 15, 19.9, 3, 'Narzędzia');

  ngOnInit() {
  }

}

export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public storageQuantity: number,
    public price: number,
    public categoryId: number,
    public categoryName: string
  ) {}
}
