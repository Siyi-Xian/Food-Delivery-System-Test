import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-restaurantviewdetails',
  templateUrl: './restaurantviewdetails.component.html',
  styleUrls: ['./restaurantviewdetails.component.css']
})
export class RestaurantviewdetailsComponent implements OnInit {

   
  errorMsg:string;
  errorFlag:boolean=false;
  restaurant_details
  imageurl
  constructor( private http:HttpClient,
      private cookie:CookieService) { }

  ngOnInit() {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });
    
    

    var url='/restaurant/display_details/' + this.cookie.get ('restaurant_id')
    
    this.http.get(url, {headers}).subscribe(data => {
      // this.detailsForm = data;
      
      if (data != null){
        this.restaurant_details = data
        this.restaurant_details.res_image = "/restaurant_images/" + this.restaurant_details.res_image
        console.log(data)
      }
    })

    // var img_url='/restaurant/restaurant_image/' + this.cookie.get("restaurant_id")
    // // var d = {res_image: this.cookie.get("restaurant_id")}
  


    // this.http.get(img_url, {headers}).subscribe(data => {
    //   console.log(data)
    //   if (data != null){
    //     var array = new Uint8Array(data["data"])
    //     var string_char = String.fromCharCode.apply(null, array)
    //     let base64 = btoa(string_char)
    //     this.imageurl = base64
    //     // console.log(this.imageurl)
    //   }
    // })
  }

}
