import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryRestService {

  private URL_PRODUCT_API_CATEGORIES = 'http://localhost:8999/api/shop/products/categories';
  constructor(private http: HttpClient) { }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.URL_PRODUCT_API_CATEGORIES);
  }
}

export interface Category {
  categoryId: number,
  categoryName: String
}
