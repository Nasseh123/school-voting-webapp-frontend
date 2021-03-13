import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthenticationComponent } from './components/authentication/authentication.component';

import {HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NewUserComponent } from './components/admin/actions/new-user/new-user.component';
import { NewPositionComponent } from './components/admin/actions/new-position/new-position.component';
import { NewCandidateComponent } from './components/admin/actions/new-candidate/new-candidate.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule } from 'ngx-toastr';
import { VoteComponent } from './components/vote/vote.component';
import { VoteChildComponent } from './components/vote/vote-child/vote-child.component';
import { VoteSuccessComponent } from './components/vote/vote-success/vote-success.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AdminComponent,
    HomeComponent,
    NavbarComponent,
    NewUserComponent,
    NewPositionComponent,
    NewCandidateComponent,
    VoteComponent,
    VoteChildComponent,
    VoteSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
