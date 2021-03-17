
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';



import  decode from  'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class LoggedinService  implements CanActivate{
  token: any;
  public jwtHelper=new JwtHelperService;

  constructor(
    
    private toastrservice:ToastrService,
    private route:Router
  ) { }
  canActivate() {
    this.token=JSON.parse(localStorage.getItem('token'))
   

    if (this.token == null) {
      this.route.navigate[('login')] 
      this.toastrservice.error('You Need to be logged n to Vote')
     
      return false
    }else{
      return true;
    }
   
  }

}
