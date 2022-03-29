import { LoginService } from './../../../../services/authentication/login.service';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { PositionsService } from 'src/app/services/positions/positions.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers:any = []
  currentUser:any;
  constructor(
    private usersservice:UsersService,
    private positionservice:PositionsService,
    private toastrservice:ToastrService,
    private loginservice:LoginService
  ) { }

  ngOnInit() {
    this.getAllUsers()
   this.currentUser =this.loginservice.checkToken()
   console.log(this.currentUser);
   
  }
  getAllUsers(){
    this.usersservice.getAllUsers().subscribe((users:any) =>{
      console.log(users);
      
      if (users){
        this.allUsers = users.user
      }
    })
  }
  deleteUser(user){
    this.positionservice.deleteUser(user).subscribe(x=>{
      if (x){
        this.toastrservice.success('Deleted Sucesfuly')
        this.getAllUsers()
      }
    },(err)=>{
      console.log(err);
      
    })
  }

}
