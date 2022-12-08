import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/entity/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{

  walletList:Wallet[]=[];
  constructor(private wallet:WalletService){}
  ngOnInit():void{
    this.walletList=this.wallet.getAllWallet();
  }

}
