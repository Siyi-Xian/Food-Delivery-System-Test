import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  
  orders
  constructor(private http:HttpClient,
    private cookie:CookieService) { }

  ngOnInit() {
    var url='/restaurant/order_history/' + this.cookie.get ('restaurant_id')
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
