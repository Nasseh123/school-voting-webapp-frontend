import { ToastrService } from 'ngx-toastr';
import { PositionsService } from './../../../../services/positions/positions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  allPositions : any=[]
  constructor(
    private positionservice:PositionsService,
    private toastrservice:ToastrService
  ) { }

  ngOnInit() {
    this.getAllPositions()
    
  }
  getAllPositions(){
    this.positionservice.getexplicitAllPositions().subscribe((x:any) =>{
      if (x){
        this.allPositions = x.positions;
        console.log(this.allPositions);
        
      }
    } )
  }
  changeStatus(pos){
    console.log('clicked')
    if (pos.status == true){
      pos.status = false;
      // pos._id='23iou9238u'
      this.positionservice.changePositionsStatus(pos).subscribe(x=>{
        if (x){
          console.log(x);
          this.toastrservice.warning(`Status for ${pos.name} was DEACTIVATED succesfully`)
          this.getAllPositions()
        }
      },(err)=>{
        console.log(err);
        
        pos.status = true;
        if (err.status == 500){
          this.toastrservice.error('Internal Server Error.')
        }
      })

    }else{
      pos.status = true;
      this.positionservice.changePositionsStatus(pos).subscribe(x=>{
        if (x){
          console.log(x);
          this.toastrservice.success(`Status for ${pos.name} was ACTIVATED succesfully`)
          this.getAllPositions()
        }
      })
    }
  }
  deletePos(pos){
    this.positionservice.deletePosition(pos).subscribe(x=>{
      if (x){
        this.toastrservice.success('Deleted Sucesfuly')
        this.getAllPositions()
      }
    },(err)=>{
      console.log(err);
      
    })
  }

}
