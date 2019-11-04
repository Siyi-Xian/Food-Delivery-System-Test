import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  verifyForm

  constructor(
    private loginService: LoginService,
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.verifyForm = this.formBuilder.group({
        otp: ''
      })
     }

  ngOnInit() {
  }

  verifyOTPAsyn(event){

  }

}
