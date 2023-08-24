import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SidedrawerComponent } from './sidedrawer/sidedrawer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    SecondComponentComponent,
    PageNotFoundComponent,
    DashboardComponent,
    SearchbarComponent,
    ProductCardComponent,
    ProductsComponent,
    SingleProductComponent,
    HeaderComponent,
    SidedrawerComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ShoppingcartComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'signin', component: FirstcomponentComponent },
      { path: 'signup', component: SecondComponentComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product/:id', component: SingleProductComponent },
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'services', component: ServicesComponent},
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
