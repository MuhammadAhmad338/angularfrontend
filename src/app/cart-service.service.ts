import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CartServiceService {
  cartProductList: Product[] = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }

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

  getCartProducts(): any {
    return this.productList.asObservable();
  }
}
