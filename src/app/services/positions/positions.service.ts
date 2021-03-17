import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  baseUrl=environment.baseUrl
  constructor(
    private http:HttpClient
  ) { }
  createPosition(data){
    return this.http.post(`${this.baseUrl}api/new/positions`,data)
  }
  getAllPositions(){
    return this.http.get(`${this.baseUrl}api/positions`)
  }
  changePositionsStatus(pos){
    return this.http.post(`${this.baseUrl}api/update-status/positions`,pos)
  }
}
