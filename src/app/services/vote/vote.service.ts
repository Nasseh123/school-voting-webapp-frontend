import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  baseURl='http://127.0.0.1:8080/'
  constructor(
    private http: HttpClient
  ) { }
  vote(data){
    return this.http.post(`${this.baseURl}api/vote/new-vote`, data)
  }
}
