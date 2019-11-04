import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientModule) { }

  validateUserDetails(email, password){
    // passes email and password to back-end to check on validation
    
    
  }
}
