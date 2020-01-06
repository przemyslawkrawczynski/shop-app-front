import { Injectable } from '@angular/core';
import { Product } from '../product/product.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderRestService {

  ORDERS_API_URL: string = 'http://localhost:8999/api/shop/orders';

  constructor(private http: HttpClient) { }

  doOrder(userId: number) {

  }

  getAllUserOrders(userId: number): Observable<Array<OrderDto>> {
    return this.http.get<Array<OrderDto>>(this.ORDERS_API_URL + '/' + userId);
  }

}

export interface OrderDto {
  orderId: number;
  userId: number;
  orderItems: Array<OrderItem>;
  orderValue: number;
  numberOfItem: number;
  createDate: string;
}

export interface OrderItem {
  itemId: number;
  productDto: Product;
  quantity: number;
  itemValue: number;
}
