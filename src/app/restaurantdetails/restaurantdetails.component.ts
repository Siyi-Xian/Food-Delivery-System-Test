import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {LoginService} from '../login.service';
import {HttpClient} from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-restaurantdetails',
  templateUrl: './restaurantdetails.component.html',
  styleUrls: ['./restaurantdetails.component.css']
})
export class RestaurantdetailsComponent implements OnInit {

  detailsForm;

  constructor(
    private httpService:HttpClient,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookie: CookieService) {
    this.detailsForm = this.formBuilder.group({
      name: '',
      location: '',
      food_category: '',
      res_image: '',
      contact: '',
      working_hours: ''
    });

  }

  selectedFile: File = null;

  fileAsBase64 = null;

  onFileSelected(event){
    //this.selectedFile = <File>event.target.files[0];
    var b64;
    var reader = new FileReader();
    reader.onload = function(e){
      console.log("encoding image")
      b64 = btoa(e.target.toString());
    }
    this.fileAsBase64 = b64;
  }



  onSubmit(details) {
    var jwttoken = this.cookie.get('jwttoken');
    details['jwttoken'] = jwttoken;
    details['_id'] = this.cookie.get('restaurant_id');
  
    //var mod = .module('app', ['naif-base64']);

    details['reg_image'] = this.fileAsBase64;
    
    var r = this.loginService.sendRequest(details, 'http://localhost:3000/restaurant/restaurant_details');
    r.subscribe(data => {
      console.log(data);

    });
  }

  ngOnInit() {
    this.httpService.get('http://localhost:3000/restaurant/restaurant_details').subscribe(data => {
      this.detailsForm = data;
    });
  }


}
