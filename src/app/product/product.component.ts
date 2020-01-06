import { Component, OnInit, Input } from '@angular/core';
import { CartRestService } from '../services/cart-rest.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  errorPlace: string = '';

  constructor(private cartService: CartRestService) { }

  ngOnInit() {
  }

  addProductToCart(formData: NgForm) {
    let quantity = formData.form.value.quantity;

    if (quantity > 0) {
      if (quantity <= this.product.storageQuantity) {
        const result = this.cartService.addCartItemToCart(this.product.id, formData.form.value.quantity);
        result.subscribe(response => {
          if (response.status === 201) {
            this.errorPlace = 'Pomyślnie dodano produkt do koszyka';

          } else {
            this.errorPlace = 'Wystąpił problem. Spróbuj ponownie!';
          }
        });
      } else {
        this.errorPlace = 'Nie posiadamy tyle produktu na stanie, zmniejsz ilość.';
      }
    } else {
      this.errorPlace = 'Proszę wybrać ilość produktu';
    }


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
