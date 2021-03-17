import { UsersComponent } from './components/admin/update/users/users.component';
import { CandidateComponent } from './components/admin/update/candidate/candidate.component';
import { PositionComponent } from './components/admin/update/position/position.component';
import { LoggedinService } from './services/access/loggedin.service';
import { VoterouteService } from './services/access/voteroute.service';
import { VoteSuccessComponent } from './components/vote/vote-success/vote-success.component';
import { VoteComponent } from './components/vote/vote.component';
import { NewCandidateComponent } from './components/admin/actions/new-candidate/new-candidate.component';
import { NewPositionComponent } from './components/admin/actions/new-position/new-position.component';
import { NewUserComponent } from './components/admin/actions/new-user/new-user.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full' },
  {path: 'home',component:HomeComponent},
  
  {path:'login',component:AuthenticationComponent},

  {
    path:'admin',
    component:AdminComponent, 
    children:[
      {
        path:'new-user',
        component:NewUserComponent,
      },
      {
        path:'new-position',
        component:NewPositionComponent,
      },
      {
        path:'new-candidate',
        component:NewCandidateComponent,
      },
      {
        path:'update-positions',
        component:PositionComponent,
      },
      {
        path:'update-candidates',
        component:CandidateComponent,
      },
      {
        path:'update-users',
        component:UsersComponent,
      },
    ],
  },
  {path:'vote',component:VoteComponent,canActivate:[VoterouteService,LoggedinService]},
  {path:'vote-success',component:VoteSuccessComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
