import { Injectable } from '@angular/core';
import { Product } from '../product/product.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderRestService {

  ORDERS_USER_API_URL: string = 'http://localhost:8999/api/shop/orders';
  ORDERS_ADMIN_API_URL: string = 'http://localhost:8999/api/shop/management/orders';

  constructor(private http: HttpClient, private authService: AuthService) { }

  doOrder(userId: number) {
    return this.http.post(this.ORDERS_USER_API_URL + '/' + userId, {} , {observe: 'response' });
  }

  getAllUserOrders(): Observable<Array<OrderDto>> {
    const userId = this.authService.userJwtInfo.userId;
    return this.http.get<Array<OrderDto>>(this.ORDERS_USER_API_URL + '/' + userId);
  }

  getAllOrders() {
    return this.http.get<Array<OrderDto>>(this.ORDERS_ADMIN_API_URL);
  }

  updateOrder(id: number, ordStatus: string): Observable<Array<OrderDto>> {

    const orderToUpdate = {
      orderId: id,
      orderStatus: ordStatus
    } as OrderToUpdateDto;


    return this.http.post<Array<OrderDto>>(this.ORDERS_ADMIN_API_URL, orderToUpdate);
  }

}

export interface OrderDto {
  orderId: number;
  userId: number;
  orderItems: Array<OrderItem>;
  orderValue: number;
  numberOfItem: number;
  createDate: string;
  orderStatus: string;
}

export interface OrderItem {
  itemId: number;
  productDto: Product;
  quantity: number;
  itemValue: number;
}

export interface OrderToUpdateDto {
  orderId: number;
  orderStatus: string;
}
