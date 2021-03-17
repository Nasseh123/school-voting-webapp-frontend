import { CandidateService } from './../../services/candidate/candidate.service';
import { PositionsService } from './../../services/positions/positions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  positionsList=[];
  percvot: any;

  constructor(
    private positionservice:PositionsService,
    private candidateservice:CandidateService
  ) { }

  ngOnInit(): void {

    this.positionservice.getAllPositions().subscribe((positions:any)=>{
      // this.positionsList = positions.positions
      if (positions){
        for (let i=0;i<positions.positions.length;i++){
          this.positionsList.push({
            'position':positions['positions'][i]['name'],
            'noOfUsers':positions['positions'][i]['noOfUsers'],
            'noUsersVoted':positions['positions'][i]['noUsersVoted'],
            'candidates':[]
          })
        }
        console.log(this.positionsList);
        
        console.log(positions['positions'][3]);
        
      }
    })
    this.candidateservice.allcandidates().subscribe((candidates:any)=>{
      let candidate = candidates.candidate;
      if (candidates.candidate){
        for(let i=0;i<candidate.length ;i++){
         let pos = this.positionsList.findIndex(pos=>{
            return pos.position === candidate[i]['position']['name']
          })
          if (pos !=-1){
            console.log(this.positionsList)
            this.positionsList[pos]['candidates'].push({
                  'id': candidate[i]['user']._id,
                  'username': candidate[i]['user'].username,
                  'image': candidate[i]['user'].imageUrl,
                  'points':this.totalPoints(this.positionsList[pos]['noUsersVoted'],candidate[i].points)
                })
          }
          this.percvot =this.totalPercVoted()
          
        }
      }
    })
    
  }
  totalPoints(noUsersVoted,candidatespoints){
    if(noUsersVoted == 0 || candidatespoints == 0 ){
      return 0;
    }
    return (candidatespoints*100)/noUsersVoted
  }
  totalPercVoted(){
    let noOfUsers =this.positionsList[0].noOfUsers
    let noUsersVoted = this.positionsList[0].noUsersVoted
    
    return (noUsersVoted*100)/noOfUsers
  }
}
