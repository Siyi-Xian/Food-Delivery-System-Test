import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-resturantlogin',
  templateUrl: './resturantlogin.component.html',
  styleUrls: ['./resturantlogin.component.css']
})
export class ResturantloginComponent implements OnInit {

  restaurantLoginForm;



  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookie: CookieService) { 
      this.restaurantLoginForm = this.formBuilder.group({
        email: '',
        password: ''
      })
    }
  timesSubmitted = 0
  ngOnInit() {
  }

  onSubmit(userData){
    var r = this.loginService.sendRequest(userData, "/authentication/login/restaurant");
    r.subscribe(data => {
      console.log(data)
      if(data['auth']){
        this.cookie.set("jwttoken", data['token']);
        this.cookie.set("restaurant_id", data['_id']);
        //console.log(data[_id])
      }
      
    })
  }

  logRestIn(event){
    event.preventDefault()
    console.log(event)
    this.timesSubmitted += 1
    if (this.timesSubmitted > 1){
      console.log("captcha has been prompted")
    }
  }
}
