import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/entity/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-updation',
  templateUrl: './updation.component.html',
  styleUrls: ['./updation.component.css']
})
export class UpdationComponent implements OnInit {

  updateWallet: Wallet = new Wallet();
  newWallet: Wallet[] = [];
  logid:number=0;
  constructor(private wallet: WalletService) {
  }
  ngOnInit() {

    this.logid = this.wallet.getUser();

    this.newWallet=this.wallet.getAllWallet();

    
  }
  update(updateWal: Wallet) {

    this.wallet.updateWallet(updateWal);
  }

}
