import { UsersService } from './../../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers:any = []
  constructor(
    private usersservice:UsersService
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }
  getAllUsers(){
    this.usersservice.getAllUsers().subscribe((users:any) =>{
      console.log(users);
      
      if (users){
        this.allUsers = users.user
      }
    })
  }

}
