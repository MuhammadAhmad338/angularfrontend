import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

  cartProductList: Product[] = [];
  url: string = 'https://webappoo4.onrender.com/products';
  public products = new BehaviorSubject<any>([]);
  public productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}

  addProduct(product: Product): void {
    const productExistsinCart = this.cartProductList.find(({name}) => name === product.name);
    if (!productExistsinCart) {
      this.cartProductList.push(product);
      this.productList.next(this.cartProductList);
      return;
    } else {
      console.log("Product Exists!");
    }
  }

  removeFromCart(product: Product): void {
    const productExistsinCart = this.cartProductList.find(({name}) => name === product.name);
    if (productExistsinCart) {
      this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name);
      this.productList.next(this.cartProductList);
      console.log("Product is removed!");
    } else {
      console.log("No Product Exists!");
    }
  }

  clearThecart(): void {
    this.cartProductList = [];
    this.productList.next(this.cartProductList);
  }

  getCartProducts(): any {
    return this.productList.asObservable();
  }

  getProductsFromInternet() {
    const data = this.http.get(this.url);
    data.forEach((mydata: any) => this.products.next(mydata));
    return this.products.asObservable();
  }

  searchTheProducts() {
    this.http.get(this.url);
  } 

}
