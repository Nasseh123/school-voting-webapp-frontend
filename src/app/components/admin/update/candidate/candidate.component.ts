import { ToastrService } from 'ngx-toastr';
import { CandidateService } from './../../../../services/candidate/candidate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  allCandidates:any =[]
  constructor(
    private candidateservice:CandidateService,
    private toasterService:ToastrService
  ) { }

  ngOnInit() {
    this.getallCandidates()
  }
  getallCandidates(){
    this.candidateservice.allcandidates().subscribe((x:any)=>{
      console.log(x.candidate);
      if (x){
        this.allCandidates = x.candidate;
      }
      
    })
  }
  deletePos(candidate){
    this.candidateservice.deletecandidate(candidate).subscribe(x=>{
      console.log(x)
      this.toasterService.warning(`You removed Candidate ${candidate.user.username}`)
      this.getallCandidates()
    },error=>{
      this.toasterService.error('ERROR ENCOUNTERED')
    })
  }
}
