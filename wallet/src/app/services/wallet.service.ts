import { Injectable } from '@angular/core';
import { Wallet } from '../entity/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  wall:Wallet[]=[];

  loginId:any;
  constructor() { }

  islogOut:boolean=false;
  logInUser:boolean=false;
   public getUser()
  {
    return this.loginId;
  }
  public getAllWallet()
  {
    return this.wall;
  }
  
  public userlogin(user:Wallet)
  {
    let userlog:Wallet|String = this.getAllWalletById(user.id)
   if(userlog instanceof String)
   {
     return false
   }
   if(userlog.id == user.id)
   {
     this.logInUser=true;
     this.loginId=user.id;
     return true;
   }
   else
      return false;

  }
  public getLoginStatus():boolean{

    return this.logInUser;
  }

  public getAllWalletById(uid:number)
  {
    for(let wa of this.wall){
      if(wa.id ==uid){
        return wa;
      }      
    }
    return "not found";

  }

  //crud
  public addWallet(wallet:Wallet)
  {
    this.wall.push(wallet);
    console.log(this.wall);
    return this.wall;
  }
  

  
  public updateWallet(updateWallet:Wallet)
  {
    let uid=updateWallet.id;

    for(let i=0;i<this.wall.length;i++)
    {
      if(this.wall[i].id == uid)
      {
        this.wall.splice(i,1,updateWallet);
        let w1=this.wall;
        return w1;
      }
    }
   
   
    return"update successfull";
  }

  public deleteWallet(deleteWalletId:number)
  {
    this.wall = this.wall.filter(w=>{
      return (w.id !== deleteWalletId)?true:false;

    });
  }

  

    public transferFrom(walletFrom:Wallet)
    {
      let uid=walletFrom.id;
      let w1 :Wallet[]=[];
    for(let i=0;i<this.wall.length;i++)
    {
      if(this.wall[i].id == uid)
      {
        this.wall[i].balance += walletFrom.transferamt ;
         w1=this.wall;
        
      }
      if(this.wall[i].id == this.getUser())
      {
        this.wall[i].balance -= walletFrom.transferamt ;
         w1=this.wall;
        
      }
    }
    return w1;

    }
  public addfunds(walletId:number,addBalance:number)
  {

    let uid=walletId;
    let w1 :Wallet[]=[];
    for(let i=0;i<this.wall.length;i++)
    {
      if(this.wall[i].id == uid)
      {
        this.wall[i].balance += addBalance ;
         w1=this.wall;
        
      }
    }
    return w1;
  }
 //   this.wall=this.wall.filter(amt=>{
 //     if(amt.id == walletId )
 //     {
 //       amt.balance= amt.balance+addBalance;
 //     }
 //   });
 //   console.log(this.wall);



   
}

