import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  
  products: Product[] = [];
  url: string = 'https://webappoo4.onrender.com/products';
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void { 
    this.getProducts();
   }

  async getProducts(): Promise<void> {
    const data = this.http.get<Product[]>(this.url);
    data.forEach((mydata) => this.products = mydata);
  }

}
