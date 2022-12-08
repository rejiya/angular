import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { Observable } from 'rxjs';
import { WalletService } from '../services/wallet.service';

@Injectable({
  providedIn: 'root'
})
export class WalletGuard implements CanActivate {
  isLoggedIn:boolean = true;
  constructor(private router:Router,private wallet:WalletService){}
  canActivate():boolean
  {
    console.log("can activate called");
      if(this.wallet.getLoginStatus())
       return true;
       else       
       {
         this.router.navigate(['/login']);
        return false;
        }
  }
  
}
