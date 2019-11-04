import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {LoginService} from '../login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurantmenu',
  templateUrl: './restaurantmenu.component.html',
  styleUrls: ['./restaurantmenu.component.css']
})
export class RestaurantmenuComponent implements OnInit {

  menuForm
  image
  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookie: CookieService,
    private http: HttpClient) {
      this.menuForm = this.formBuilder.group({
        name: "",
        cost: "",
        description: "",
        image: ""
      }) 
     }


  // fileAsBase64 = null;

  onFileSelected(event){
    // var b64
    // var reader = new FileReader()
    // reader.onload = function(e){
    //   console.log("encoding images")
    //   b64 = btoa(e.target.toString());
    // }
    // this.fileAsBase64 = b64;
    const file = event.target.files[0];
    this.image = file
  }


  onSubmit(menu){
    var jwttoken = this.cookie.get("jwttoken")
    // menu["jwttoken"] = jwttoken
    // menu['id'] = this.cookie.get("restaurant_id")
    // menu['image'] = this.image;
    const formData = new FormData()
    formData.append("image", this.image, this.cookie.get("restaurant_id") + menu['name'] + ".jpg")
    formData.append('id', this.cookie.get("restaurant_id"))
    formData.append('jwttoken', jwttoken)
    formData.append('name', menu['name'])
    formData.append('cost', menu['cost'])
    formData.append('description', menu['description'])
    
    this.http.post<any>('/restaurant/menu', formData).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
    )
    // var r = this.loginService.sendRequest(menu, "/restaurant/menu");
    // r.subscribe(data => {
    //   console.log(data)
      
    // })
  }
  
  ngOnInit() {
  }

}
