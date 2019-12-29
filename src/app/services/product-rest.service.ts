import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/product/product.component';
import { Observable, Subject } from 'rxjs';

const httpHeader = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductRestService  {

  private URL_PRODUCT_API = 'http://localhost:8999/api/shop/products';
  private listProducts: Array<Product> = new Array<Product>();

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    console.log("iam here");
    return this.httpClient.get<Product[]>(this.URL_PRODUCT_API);
  }


}
