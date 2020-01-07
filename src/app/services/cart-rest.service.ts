import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CartDto } from '../cart/cart.component';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartRestService {


  private URL_CART_API = 'http://localhost:8999/api/shop/carts';
  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getCartByCartId(): Observable<CartDto> {
    let cartId = this.authService.userJwtInfo.cartId;
    return this.http.get<CartDto>(this.URL_CART_API + '/' + cartId);
  }

  addCartItemToCart(productId: number, quant: number) {

    let cartId = this.authService.userJwtInfo.cartId;

    const addCartItemDto = {
      cart_id: cartId,
      product_id: productId,
      quantity: quant
    } as AddCartItemDto;

    return this.http.post(this.URL_CART_API, addCartItemDto, { observe: 'response' });

  }

  removeCartItemById(cartItemId: number) {
    return this.http.delete(this.URL_CART_API + '/' + cartItemId, { observe: 'response' });
  }

  updateCartItem(cartItemId: number, quant: number) {
    return this.http.put(this.URL_CART_API + '/' + cartItemId + '/' + quant, {}, { observe: 'response'});
  }

}

export interface AddCartItemDto {
  cart_id: number;
  product_id: number;
  quantity: number;
}

export interface CartItemUpdateDto {
  id: number;
  quantity: number;
}
