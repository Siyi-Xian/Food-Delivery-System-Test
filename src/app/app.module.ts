import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';


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
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { VerifyComponent } from './verify/verify.component';
import { RecoverComponent } from './recover/recover.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { RestaurantdropdownComponent } from './restaurantdropdown/restaurantdropdown.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { CustomereditprofileComponent } from './customereditprofile/customereditprofile.component';
import { DeliveryloginComponent } from './deliverylogin/deliverylogin.component';
import { DeliveryregComponent } from './deliveryreg/deliveryreg.component';

export function socialConfigs(){
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('594822105603-ugolhi0gvekn50uh6pct5v0hthh3mjfn.apps.googleusercontent.com')
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('2606643606225907')
    }
  ]);
  return config;
}


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
    RestaurantcurrentordersComponent,
    CustomerdashboardComponent,
    VerifyComponent,
    RecoverComponent,
    ShoppingcartComponent,
    RestaurantdropdownComponent,
    CustomerprofileComponent,
    CustomereditprofileComponent,
    DeliveryloginComponent,
    DeliveryregComponent  ],
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
      },
      {
        path: 'customerdashboard',
        component: CustomerdashboardComponent
      },
      {
        path: 'verify',
        component: VerifyComponent
      },
      {
        path: 'recover',
        component: RecoverComponent
      },
      {
        path: 'shoppingcart',
        component: ShoppingcartComponent
      },
      {
        path: 'customerprofile',
        component: CustomerprofileComponent
      },
      {
        path: 'customereditprofile',
        component: CustomereditprofileComponent
      }
    ])
  ],
  providers: [
    CookieService,
    AuthService,{
      provide: AuthServiceConfig,
      useFactory: socialConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
