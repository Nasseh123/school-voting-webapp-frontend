import { ToastrService } from 'ngx-toastr';
import { CandidateService } from './../../services/candidate/candidate.service';
import { PositionsService } from 'src/app/services/positions/positions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  positionCount = 0
  candidateCount = 0
  blockUserfunctions =true
  constructor(
    private positionservice:PositionsService,
    private candidateservice:CandidateService,
    private toastr:ToastrService,
  ) { }

  ngOnInit(): void {
    this.positionservice.getAllPositions().subscribe(response=>{
      this.positionCount= response['positions'].length
      this.candidateservice.allcandidates().subscribe(response=>{
        this.candidateCount= response['candidate'].length
        console.log(this.candidateCount);
        console.log(this.positionCount);
        
        if (this.positionCount>0 || this.candidateCount>0){
          this.blockUserfunctions = true
        }else{

          this.blockUserfunctions = false
        }
      })
    })
   
    
  }
  showWarning(value){
    
    this.toastr.error(value)
  }

}
