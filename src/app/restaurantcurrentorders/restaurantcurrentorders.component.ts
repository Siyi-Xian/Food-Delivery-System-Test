import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-restaurantcurrentorders',
  templateUrl: './restaurantcurrentorders.component.html',
  styleUrls: ['./restaurantcurrentorders.component.css']
})
export class RestaurantcurrentordersComponent implements OnInit {

  constructor(private http:HttpClient,
    private cookie:CookieService) { }
  orders

  fullfillOrder(id, i){
    var url = "restaurant/fullfillorder"
    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });
    this.http.post(url, {id: id}, {headers}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
    )
    this.orders.splice(parseInt(i), 1)
  }

  ngOnInit() {
    var url='/restaurant/current_orders/' + this.cookie.get ('restaurant_id')
    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });
    this.http.get(url, {headers}).subscribe(data => {
      // this.detailsForm = data;
      
      if (data != null){
        this.orders = data
        console.log(this.orders)
      }
    })
  }



}
