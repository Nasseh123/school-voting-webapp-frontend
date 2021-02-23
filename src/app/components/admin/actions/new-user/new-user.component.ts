import { LoginService } from './../../../../services/authentication/login.service';
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['/src/app/components/authentication/authentication.component.scss','./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  newUser:any={};
  confpass;
  norole;
  constructor(
    private toastr: ToastrService,
    private auth:LoginService
  ) { }

  ngOnInit(){
    this.dropdownList = [
      {  item_id: 1,item_text: 'student' },
      {   item_id: 2,item_text: 'admin' },
 
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      // allowSearchFilter: true
    };
    
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  createUser(value){
    console.log((value));
    let valid=true;
    if(value.password != value.confirmpassword){
      this.confpass='Passwords dont match'
      this.toastr.error('Passwords do not match!')
      valid=false
    }
    if (!value.roles ){
      this.toastr.error('User role not selected!')
      valid=false
    }
    // let roles=value.roles.for
    let cc = value.roles.map(({ item_text }) => item_text);
    console.log(cc)
    value.roles=cc
    
    value.roles.push('user')
    console.log(value.roles);
    if (valid){

      this.auth.createUser(value).subscribe((x:any)=>{
        this.toastr.success(x)
      },(error) =>{
        console.log('errro');
        console.log(error);
        
        this.toastr.error(error.error.message)
      })
    }
  }
}
