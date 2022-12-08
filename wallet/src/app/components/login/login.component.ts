import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/entity/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  islogin:boolean=false;

  loginDetails:Wallet=new Wallet();
  loginId: number=0;
  constructor(private wallet:WalletService){}
  
  login()
  {
        
    this.islogin= this.wallet.userlogin(this.loginDetails);
  }

}
