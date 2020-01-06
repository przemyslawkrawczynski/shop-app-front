import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/cart-item.component';
import { CartRestService } from '../services/cart-rest.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Array<CartItem>;
  cart: Cart = new Cart();
  infoPanel: string = null;

  constructor(private cartService: CartRestService, private router: Router) {
  }

  ngOnInit() {
    this.refreshData();
  }

  deleteCart(cart: CartItem) {

    this.cartService.removeCartItemById(cart.id).subscribe(
      response => {
        console.log(response);
        if (response.status === 204) {
          this.infoPanel = 'Pomyślnie usunięto pozycję z koszyka';
          this.refreshData();

        }
      }
    )
  }

  updateCartItem(cart: CartItem) {

    if (cart.productDto.storageQuantity >= cart.quantity) {
      this.cartService.updateCartItem(cart.id, cart.quantity).subscribe(
        response => {
          console.log(response);
          if (response.status === 201) {
            this.infoPanel = 'Zaktualizowano koszyk';
            this.refreshData();
          }
        }
      )
    } else {
      this.infoPanel = 'Nie posiadamy podanej wielkości produktu. Dostępne: ' + cart.productDto.storageQuantity;
    }
  }

  refreshData() {
    this.cartItems = new Array();
    this.cart = new Cart();

    let data = this.cartService.getCartByCartId(29);

    data.subscribe(response => {
      this.cartItems = response.cartItemDtos;
      this.cart.cartItemDtos = response.cartItemDtos;
      this.cart.cart_id = response.cart_id;
      this.cart.user_id = response.user_id;
      this.cart.cartValue = response.cartValue;
    });
  }

}
export class Cart {
  cartItemDtos: Array<CartItem> = new Array();
  cartValue: number = 0;
  cart_id: number = null;
  user_id: number = null;
}

export interface CartDto {
  'cart_id': number;
  'user_id': number;
  'cartItemDtos': Array<CartItem>;
  'cartValue': number;

}
