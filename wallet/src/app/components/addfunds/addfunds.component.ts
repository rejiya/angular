import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/entity/wallet';
import { WalletService } from 'src/app/services/wallet.service';
import { WalletspringService } from 'src/app/services/walletspring.service';

@Component({
  selector: 'app-addfunds',
  templateUrl: './addfunds.component.html',
  styleUrls: ['./addfunds.component.css']
})
export class AddfundsComponent implements OnInit{

  walletId:number=0;
  walletobj:Wallet=new Wallet();
  walletList:Wallet[]=[];
  constructor(private wallet:WalletService,private sql:WalletspringService){}

  ngOnInit()
  {
    this.walletId = this.wallet.getUser();
    this.walletList=this.wallet.getAllWallet();
    
  }

  addAmtFunds(addition:Wallet)
  {
    //this.wallet.addfunds(addition);
    this.wallet.addfunds(this.walletId,addition.addamt);
   
  }

}
