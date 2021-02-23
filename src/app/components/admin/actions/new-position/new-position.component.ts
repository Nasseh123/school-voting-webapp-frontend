import { PositionsService } from './../../../../services/positions/positions.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-position',
  templateUrl: './new-position.component.html',
  styleUrls: ['/src/app/components/authentication/authentication.component.scss','./new-position.component.css']
})
export class NewPositionComponent implements OnInit {
  newPosition:any={}
  constructor(
    private position:PositionsService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }
  createPosition(value){
    console.log(value);
    this.position.createPosition(value).subscribe((x:any) => {
      console.log(x);
      this.toastr.success(x.message)
    },(error)=>{
      this.toastr.error(error.error.message)
    })
  }
}
