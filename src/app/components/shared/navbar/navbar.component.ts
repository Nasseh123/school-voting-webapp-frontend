import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminguardService } from './../../../services/access/admin/adminguard.service';
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
  logged:boolean = false;
  adminRights:boolean = false
  constructor(
    private Voteservice:VoterouteService,
    private adminguard:AdminguardService,
    private toasterservice:ToastrService,
    private router:Router
  ) { }

  ngOnInit(){
    this.token=JSON.parse(localStorage.getItem('token'))
    if (this.token){
      this.logged = true
      console.log(this.token);
      
      if (this.token.votingStatus == true){
        this.status = true
      }else{
        this.status = false;
      }
      
    }else{
      this.logged = false
      this.status = false
    }
    var token= JSON.parse(localStorage.getItem('token'))
    let dsc = this.token.roles.findIndex(x=>{
      console.log(x);
      return x==='ROLE_ADMIN'
    })
    this.adminRights=(dsc == -1)?false :true;
    
  }
  logout(){
    localStorage.removeItem('token')
    this.toasterservice.success('Logged out successfully :smiley:')
  }

}
