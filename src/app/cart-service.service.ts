import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

  cartProductList: Product[] = [];
  wishlistProducts: Product[] = [];
  url: string = 'https://webappoo4.onrender.com/products';
  public products = new BehaviorSubject<any>([]);
  public productList = new BehaviorSubject<any>([]);
  public wishlist = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}

  addProduct(product: Product): void {
    const productExistsinCart = this.cartProductList.find(({id}) => id === product.id);
    if (!productExistsinCart) {
      this.cartProductList.push(product);
      this.productList.next(this.cartProductList);
      return;
    } else {
      console.log("Product Exists!");
    }
  }

  removeFromCart(product: Product): void {
    const productExistsinCart = this.cartProductList.find(({id}) => id === product.id);
    if (productExistsinCart) {
      this.cartProductList = this.cartProductList.filter(({id}) => id !== product.id);
      this.productList.next(this.cartProductList);
      console.log("Product is removed!");
    } else {
      console.log("No Product Exists!");
    }
  }

  addToWishlist(product: Product): void {
    const productExistsinWishlist = this.wishlistProducts.find(({id}) => id === product.id);
    if (!productExistsinWishlist) {
      this.wishlistProducts.push(product);
      this.wishlist.next(this.wishlistProducts);
      return;
    } else {
      console.log(`Products is already in the wishlist`);
    }
  }

  removeFromWishlist(product: Product): void {
    const productExistsinWishlist = this.wishlistProducts.find(({id}) => id === product.id);
    if (productExistsinWishlist) {
      this.wishlistProducts = this.wishlistProducts.filter(({id}) => id !== product.id);
      this.wishlist.next(this.wishlistProducts);
      console.log("Your Product is removed!");
    } else {
      console.log(`No Product Exists!`);
    }
  }

  clearThecart(): void {
    this.cartProductList = [];
    this.productList.next(this.cartProductList);
  }

  getCartProducts(): any {
    return this.productList.asObservable();
  }

  getProductsFromInternet(): any {
    const data = this.http.get(this.url);
    data.forEach((mydata: any) => this.products.next(mydata));
    return this.products.asObservable();
  }

}
