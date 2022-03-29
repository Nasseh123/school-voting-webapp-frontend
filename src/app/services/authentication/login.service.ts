import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
// import * as jwt_decode from "jwt-decode";
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  baseURl='http://127.0.0.1:8080/'
  constructor(
    private http: HttpClient
  ) { }

  login(data){
    return this.http.post(`${this.baseURl}api/auth/signin`, data)
  }
  // signup()
  createUser(data){
    return this.http.post(`${this.baseURl}api/auth/signup`,data)
  }

  checkToken(){

    return JSON.parse(localStorage.getItem('token'))
    
    
    }
}
