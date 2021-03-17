import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../services/authentication/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css','./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  userDetails:any={}
  constructor(
    private loginservice:LoginService,
    private route:Router,
    private toastrservice:ToastrService
  ) { }

  ngOnInit(): void {
  }
  login(data){
    console.log(data);
    
    // let credentials={
    //   "password":"1223123123",
    //   "username":"bundinasseh"
    // }
    this.loginservice.login(data).subscribe(x=>{
      console.log(x);
      this.route.navigate(['home']);
      localStorage.setItem('token',JSON.stringify(x))
    },(err)=>{
      this.toastrservice.error(err.error.message)
    })
  }

}
