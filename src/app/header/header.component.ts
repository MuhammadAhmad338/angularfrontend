import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  
  isSignedIn: boolean = false;
  isDrawerOpen: boolean = false;
  isShoppingCartOpen: boolean = false;
  constructor(private cartService: CartServiceService) {}
  ngOnInit(): void {
     this.cartService.isSignedIn.subscribe((response) => this.isSignedIn = response);
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  cart(): void {
    this.isShoppingCartOpen = !this.isShoppingCartOpen;
  }

  signOut(): void {
    this.cartService.signout();
  }

}
