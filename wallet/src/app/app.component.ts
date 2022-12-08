import { Component, OnInit } from '@angular/core';
import { WalletService } from './services/wallet.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wallet';
  isLog:boolean=false;
  constructor(private wallet:WalletService){}
  ngOnInit()
  {
    if(this.wallet.getLoginStatus())
    {
      this.isLog=true;
    
    }
  }
}
