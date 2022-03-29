import { PositionsService } from './../../../../services/positions/positions.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from 'src/app/services/class/class.service';

@Component({
  selector: 'app-new-position',
  templateUrl: './new-position.component.html',
  styleUrls: ['/src/app/components/authentication/authentication.component.scss','./new-position.component.css']
})
export class NewPositionComponent implements OnInit {
  newPosition:any={}
  studentClassSettings = {}
  allClasses:any = []
  constructor(
    private position:PositionsService,
    private toastr: ToastrService,
    private classservice:ClassService,
  ) { }

  ngOnInit(): void {
    this.classservice.getAllClasses().subscribe(repsonse=>{
    
      this.allClasses = repsonse
    })
   
    this.studentClassSettings = {
      singleSelection: true,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3
      // allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  createPosition(value){
    console.log(value);
    if (value.selectedclass && value.selectedclass.length>0){
      value.selectedclass.forEach(x =>{
        console.log(x._id)
        value.selectedclass = x._id
        
      })}else{
        value.selectedclass = null
      }
    this.position.createPosition(value).subscribe((x:any) => {
      console.log(x);
      this.toastr.success(x.message)

      location.reload();
    },(error)=>{
      this.toastr.error(error.error.message)
    })
  }
}
