import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css' ]  // 🔥 Fixed styleUrls (was styleUrl)
})
export class ProductAddComponent implements OnInit {

  productForm! : FormGroup;

  constructor(private fb: FormBuilder, private service : ProductServiceService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['',],  
      description: ['',],
      price: [null,], 
      stock: [null, ],
      category: ['', ],
      //createdAt: [new Date().toISOString()] 
    });
  }

  addProduct() {
    console.log(1);
    
    if (this.productForm.valid) {
      
      const product: Product = this.productForm.value;  

      this.service.addProduct(product).subscribe({
        next: (response) => {
          console.log('Product added:', response);
          alert('Product added successfully!');
          this.productForm.reset();
          this.productForm.patchValue({ createdAt: new Date().toISOString() });
        },
        error: (error) => {
          console.error('Error adding product:', error);
          alert('Failed to add product.');
        }
      });
    } else {
      alert('Please fill all required fields.');
    }
  }
}


export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  createdAt: string;
}
