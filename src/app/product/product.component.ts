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
