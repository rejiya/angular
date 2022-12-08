import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private wallet:WalletService,private router:Router){}
  ngOnInit() {
   
    this.wallet.logInUser=false;
    this.wallet.islogOut=true;
    this.router.navigate(['/login']);
  }

}
