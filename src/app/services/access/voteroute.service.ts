import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';



import  decode from  'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class VoterouteService implements CanActivate{
  token: any;
  public jwtHelper=new JwtHelperService;

  constructor(
    private route:Router,
    private toastrservice:ToastrService
  ) { }
  canActivate() {
    this.token=JSON.parse(localStorage.getItem('token'))
   
    
   
    if (this.token){
      let status = this.token.votingStatus
   
    if (this.token == null) {
      this.toastrservice.error('ERROR')
      this.route.navigate[('home')]
        return false
    }if(status == true){
      this.toastrservice.error('YOU HAVE ALREADY VOTED')
      this.route.navigate[('home')]
      return false;
    }else{
      return true;
    }
  }
  }
  canVote(){
    return this.canActivate()
  }
}
