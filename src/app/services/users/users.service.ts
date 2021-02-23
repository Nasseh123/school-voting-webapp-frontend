import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl=environment.baseUrl
  constructor(
    private http:HttpClient
  ) { }
  getAllUsers(){
    return this.http.get(`${this.baseUrl}api/users/all`)
  }
}
