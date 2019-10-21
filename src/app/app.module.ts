import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ResturantloginComponent } from './resturantlogin/resturantlogin.component';
import { RestaurantregComponent } from './restaurantreg/restaurantreg.component';
import { FormsModule } from '@angular/forms';
import { RestaurantViewComponent } from './restaurant-view/restaurant-view.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';
import { RestaurantmenuComponent } from './restaurantmenu/restaurantmenu.component';
import { RestaurantstatsComponent } from './restaurantstats/restaurantstats.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RestaurantviewdetailsComponent } from './restaurantviewdetails/restaurantviewdetails.component';
import { RestaurantviewmenuComponent } from './restaurantviewmenu/restaurantviewmenu.component';
import { RestaurantcurrentordersComponent } from './restaurantcurrentorders/restaurantcurrentorders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    PublicComponent,
    RegistrationComponent,
    ResturantloginComponent,
    RestaurantregComponent,
    RestaurantViewComponent,
    OrderhistoryComponent,
    RestaurantdetailsComponent,
    RestaurantmenuComponent,
    RestaurantstatsComponent,
    SidebarComponent,
    RestaurantviewdetailsComponent,
    RestaurantviewmenuComponent,
    RestaurantcurrentordersComponent  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    RouterModule.forRoot([
      {
        path: '',
        component: PublicComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'public',
        component: PublicComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'resturantlogin',
        component: ResturantloginComponent
      },
      {
        path: 'restaurantreg',
        component: RestaurantregComponent
      },
      {
        path: 'restaurant-view',
        component: RestaurantViewComponent
      },
      {
        path: 'orderhistory',
        component: OrderhistoryComponent
      },
      {
        path: 'restaurantdetails',
        component: RestaurantdetailsComponent
      },
      {
        path: 'restaurantmenu',
        component: RestaurantmenuComponent
      },
      {
        path: 'restaurantstats',
        component: RestaurantstatsComponent
      },
      {
        path: 'restaurantviewdetails',
        component: RestaurantviewdetailsComponent
      },
      {
        path: 'restaurantviewmenu',
        component: RestaurantviewmenuComponent
      },
      {
        path: 'restaurantcurrentorders',
        component: RestaurantcurrentordersComponent
      }
    ])
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
