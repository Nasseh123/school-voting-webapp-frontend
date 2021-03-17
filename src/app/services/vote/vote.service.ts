import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  baseURl='http://127.0.0.1:8080/'
  token = JSON.parse(localStorage.getItem('token'))
  headers=new HttpHeaders().set("x-access-token",`${this.token.accessToken}`) 
  
  
  constructor(
    private http: HttpClient
  ) { }
  vote(data){
    console.log(this.token.accessToken);
    return this.http.post(`${this.baseURl}api/vote/new-vote`, data,{headers:this.headers})
  }
}
