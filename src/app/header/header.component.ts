import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isDrawerOpen: boolean = false;
  isShoppingCartOpen: boolean = false;
  constructor() {}
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  cart(): void {
    this.isShoppingCartOpen = !this.isShoppingCartOpen;
  }
}
