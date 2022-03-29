import { CandidateService } from './../../../../services/candidate/candidate.service';
import { ToastrService } from 'ngx-toastr';
import { PositionsService } from './../../../../services/positions/positions.service';
import { UsersService } from './../../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ClassService } from 'src/app/services/class/class.service';
@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['/src/app/components/authentication/authentication.component.scss','./new-candidate.component.css']
})
export class NewCandidateComponent implements OnInit {

  constructor(
    private usersservice:UsersService,
    private positionservice:PositionsService,
    private candidateservice:CandidateService,
    private toastr:ToastrService,
  ) { }

  userList:any = [];
  selectedItems = [];
  usersSetting :IDropdownSettings = {};

  positionsList:any = [];
  positionSettings :IDropdownSettings = {};
  async ngOnInit() {

 
    this.usersservice.getAllUsers().subscribe((users:any)=>{
      this.userList = users.user
      console.log(this.userList);
      
    })
    this.usersSetting = {
      singleSelection: false,
      idField: '_id',
      textField: 'username',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.positionservice.getAllPositions().subscribe((positions:any)=>{
      this.positionsList = positions.positions
    })

    this.positionSettings = {
      singleSelection: true,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  createCandidate(value){
    console.log(value)
    let valid = true
    if (!value.user){
      this.toastr.error('Kindly select a user.')
      valid = false
    }
    if (!value.position){
      this.toastr.error('Kindly select a position.')
      valid = false
    }
     value.position.forEach(x =>{
      console.log(x._id)
      value.position = x._id
      
    })
 
    value.user = value.user.map(({ _id }) => _id);
    console.log(value);
    // value.user.forEach(x =>{
    //   console.log(x._id)
    //   value.user = x._id
    // })
    // console.log(value);
    
    if (valid){
      console.log(value);
      
      this.candidateservice.createCandidate(value).subscribe((res:any)=>{
        console.log(res);
        
        this.toastr.success('Candidate created successfully')

      location.reload();
      },(error)=>{
        this.toastr.error(error.error.message)
      })
    }
    // }
  }
}
