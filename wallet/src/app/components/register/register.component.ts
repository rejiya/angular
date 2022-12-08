import { Component,OnInit } from '@angular/core';
import { Wallet } from 'src/app/entity/wallet';
import { WalletService } from 'src/app/services/wallet.service';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  registerForm!:FormGroup;
  submitted=false;
  fDate:any;
 
  newWallet:Wallet = new Wallet();
  newEntry:Wallet[]=[];
  
 

  constructor(private wallet:WalletService,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
   
    this.registerForm=this.fb.group({
      Id:['',[Validators.required]],
      name:['',[Validators.required]],
      balance:['',[Validators.required]],
      pswd:['',Validators.compose([Validators.required,Validators.minLength(6)])]

    });
  }
  
  

  addUser()
  {
  console.log("add user called");
  console.log(this.newWallet);
  console.log(this.wallet.addWallet(this.newWallet));
  }

}
