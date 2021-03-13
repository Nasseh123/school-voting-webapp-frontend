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
    ],
  },
  {path:'vote',component:VoteComponent},
  {path:'vote-success',component:VoteSuccessComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
