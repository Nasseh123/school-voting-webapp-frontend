import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  baseUrl=environment.baseUrl
  constructor(
    private http:HttpClient
  ) { }
  createCandidate(data){
    return this.http.post(`${this.baseUrl}api/new/candidate`,data)
  }
}