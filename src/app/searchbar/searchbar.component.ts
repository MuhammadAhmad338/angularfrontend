import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {
  
  values: string = '';
  searchedProducts: Product[] = [];
  url: string = 'https://webappoo4.onrender.com/dashboard'
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getTheSearchValue(value: string): void {
   const data = this.http.get(`${this.url}?search=${value}`);
   data.forEach((res: any) => this.searchedProducts = res);
  }
  
}
