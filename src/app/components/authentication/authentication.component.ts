import { LoginService } from './../../services/authentication/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css','./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    private loginservice:LoginService,
    private route:Router
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
    })
  }

}
