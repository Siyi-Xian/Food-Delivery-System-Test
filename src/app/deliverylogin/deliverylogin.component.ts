import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {FormBuilder} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-deliverylogin',
  templateUrl: './deliverylogin.component.html',
  styleUrls: ['./deliverylogin.component.css']
})
export class DeliveryloginComponent implements OnInit {

  deliveryLoginForm;



  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookie: CookieService) {
    this.deliveryLoginForm = this.formBuilder.group({
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

}
