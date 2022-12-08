import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/entity/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-deletion',
  templateUrl: './deletion.component.html',
  styleUrls: ['./deletion.component.css']
})
export class DeletionComponent implements OnInit {

  deluser:Wallet = new Wallet();
  newWallet:Wallet[]=[];
  logid: number=0;
  constructor(private wallet:WalletService){}
 
  ngOnInit(){
    

      this.logid = this.wallet.getUser();
  
      this.newWallet=this.wallet.getAllWallet();
  
      
 
  }
  delete(del:Wallet)
  {
    alert(JSON.stringify(del.id));
    console.log(del)
    this.wallet.deleteWallet(del.id);

  }
}
