import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit{
  public wishlistProducts: Product[] = [];
  constructor(private cartService: CartServiceService) {}
  ngOnInit(): void {
   this.cartService.wishlist.subscribe((result) => this.wishlistProducts = result);
 }

 removeProductFromWishlist(product: Product) {
    this.cartService.removeFromWishlist(product);
 }
}
