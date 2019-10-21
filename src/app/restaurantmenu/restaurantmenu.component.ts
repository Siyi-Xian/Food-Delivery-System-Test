import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-restaurantmenu',
  templateUrl: './restaurantmenu.component.html',
  styleUrls: ['./restaurantmenu.component.css']
})
export class RestaurantmenuComponent implements OnInit {

  menuForm
  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookie: CookieService) {
      this.menuForm = this.formBuilder.group({
        name: "",
        cost: "",
        description: "",
        image: ""
      }) 
     }


  fileAsBase64 = null;

  onFileSelected(event){
    var b64
    var reader = new FileReader()
    reader.onload = function(e){
      console.log("encoding images")
      b64 = btoa(e.target.toString());
    }
    this.fileAsBase64 = b64;
  }


  onSubmit(menu){
    var jwttoken = this.cookie.get("jwttoken")
    menu["jwttoken"] = jwttoken
    menu['_id'] = this.cookie.get("restaurant_id")
    menu['image'] = this.fileAsBase64;
    var r = this.loginService.sendRequest(menu, "http://localhost:3000/restaurant/menu");
    r.subscribe(data => {
      console.log(data)
      
    })
  }
  
  ngOnInit() {
  }

}
