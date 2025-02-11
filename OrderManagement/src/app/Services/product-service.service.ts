import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Components/product-add/product-add.component';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl = `https://localhost:7080/api/Product`; 

  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<Product> { 
    return this.http.post<Product>(this.baseUrl, product); 
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

}
