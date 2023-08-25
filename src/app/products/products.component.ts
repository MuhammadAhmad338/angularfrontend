import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {

  products: Product[] = [];
  
  constructor(private http: HttpClient, private cartService: CartServiceService) {}
  
  ngOnInit(): void {
    this.cartService.getProductsFromInternet().subscribe((res: any) => this.products = res);
  }

}
