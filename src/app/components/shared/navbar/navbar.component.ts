import { VoterouteService } from './../../../services/access/voteroute.service';
import { VoteService } from './../../../services/vote/vote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token:any;
  status: any;
  constructor(
    private Voteservice:VoterouteService
  ) { }

  ngOnInit(){
    this.token=JSON.parse(localStorage.getItem('token'))
    if (this.token){
      this.status = this.token.votingStatus
      console.log(this.status);
    }else{
      this.status = true
    }
    
    
    
  }

}
