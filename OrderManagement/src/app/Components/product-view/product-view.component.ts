import { Component, OnInit } from '@angular/core';
import { Product } from '../product-add/product-add.component';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
  selector: 'app-product-view',
  standalone: false,
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
  products: Product[] = [];

  constructor(private servics : ProductServiceService){
    
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
 
    this.servics.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
 
      },
      error: (error) => {
        console.error('Error fetching products:', error);
       

      }
    });
  }


  

}
