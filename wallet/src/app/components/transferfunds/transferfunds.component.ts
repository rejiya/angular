import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/entity/wallet';
import { WalletService } from 'src/app/services/wallet.service';
import{Senddata} from 'src/app/entity/senddata'
import { WalletspringService } from 'src/app/services/walletspring.service';
@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent implements OnInit {
  walletList:Wallet[]=[];
  walletId:number=0;
  transWall:Wallet=new Wallet();
  transWallet:Senddata=new Senddata();
  isTransfer:boolean=false;
  constructor(private wallet:WalletService,private sql:WalletspringService){}
  ngOnInit()
  {
    this.walletList=this.wallet.getAllWallet();
    this.walletId=this.wallet.getUser();
  }

 
  transfer(fromWallet:Wallet)
  {

    this.transWallet.fromID=this.walletId
   
    
    this.transWall=fromWallet;
    
    this.isTransfer=true;
    
  }
  transferAmt()
  {
   
    this.wallet.transferFrom(this.transWall);
    this.isTransfer=false;
  }

}
