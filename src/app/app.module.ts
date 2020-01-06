import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartItemComponent } from './cart-item/cart-item.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    HomeComponent,
    OrdersComponent,
    PageNotFoundComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
