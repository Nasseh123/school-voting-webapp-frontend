import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class ClassService {
  baseUrl=environment.baseUrl

  constructor(

    private http:HttpClient
  ) { }

  createClass(data){
    return this.http.post(`${this.baseUrl}api/new/class`,data)
  }

  getAllClasses(){
    return this.http.get(`${this.baseUrl}api/classes`)
  }
}
