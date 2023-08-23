import { Component, Input, OnInit, Output, inject, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})

export class SingleProductComponent implements OnInit {
  
  singleProduct: any = {};
  routes: ActivatedRoute = inject(ActivatedRoute);
  url: string = "https://webappoo4.onrender.com/products";
  name: string= "";
  cartProductList: Product[] = [];

  constructor(private http: HttpClient, private cartService: CartServiceService) {
    this.name = this.routes.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getSingleProduct();
  }
  
  //Here we are filtering the products on the basis of their name that we are passing in the route
  getSingleProduct(): void {
    const data = this.http.get(`${this.url}/${this.name}`);
    data.forEach(mydata => this.singleProduct = mydata);    
  }

  addProduct(product: Product) {
    this.cartService.addProduct(product);
    console.log(this.cartService.cartProductList);
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }
  
}
