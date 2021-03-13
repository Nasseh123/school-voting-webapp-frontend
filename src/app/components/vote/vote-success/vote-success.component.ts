import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-success',
  templateUrl: './vote-success.component.html',
  styleUrls: ['./vote-success.component.css']
})
export class VoteSuccessComponent implements OnInit {
  votechosen: any[]=[];

  constructor(
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    console.log("hehehe");
    
    this.toastr.success('You have   Voted Succesfully')
    this.votechosen=JSON.parse(localStorage.getItem('votechosen'))
    console.log(this.votechosen);
    

  }

}
