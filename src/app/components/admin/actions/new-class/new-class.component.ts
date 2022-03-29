import { ClassService } from './../../../../services/class/class.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['/src/app/components/authentication/authentication.component.scss','./new-class.component.css']
})
export class NewClassComponent implements OnInit {
  newClass:any={}
  constructor(
    private classservice:ClassService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
  }
  createClass(value){
    console.log(value);
    this.classservice.createClass(value).subscribe((x:any) => {
      console.log(x);
      this.toastr.success(x.message)
      location.reload();
    },(error)=>{
      this.toastr.error(error.error.message)
    })
  }
}
