import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Components/product-add/product-add.component';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl = `https://localhost:7080/api/Product`; // ✅ Base URL is correct

  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<Product> { // ✅ Added proper type for better type safety
    return this.http.post<Product>(this.baseUrl, product); // ✅ Directly using baseUrl without template literal
  }
}
