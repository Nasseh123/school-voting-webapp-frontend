import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate{
  token: any;
  constructor(
    private toasterservice:ToastrService,
    private router:Router
  ) { }
  canActivate(): boolean {
    this.token=JSON.parse(localStorage.getItem('token'))

    let dsc = this.token.roles.findIndex(x=>{
      console.log(x);
      return x==='ROLE_ADMIN'
    })
    if (dsc == -1){
      this.router.navigate(['/login']);
          this.toasterservice.error('LOGIN WITH ADMINISTRATIVE PRIVILEGE!','INSUFFICIENT RIGHTS')
          return false;
    }else{
      return true;
    }

  }

}
