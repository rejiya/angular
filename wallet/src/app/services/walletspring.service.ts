import { Injectable } from '@angular/core';
import { Wallet } from '../entity/wallet';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Senddata } from '../entity/senddata';
@Injectable({
  providedIn: 'root'
})
export class WalletspringService {
  wall:Wallet[]=[];

  loginId:any;
  
  constructor(private httpClient:HttpClient) { }
  logInUser:boolean=false;

  public addWallet(wallet:Wallet)
  {
      return this.httpClient.post("http://localhost:8090/wallet",wallet,{responseType:"text"});
  }

  public transferFrom(walletFrom:Senddata)
  {
    
    return this.httpClient.post("http://localhost:8090/walletFrom",walletFrom,{responseType:"text"});

  }
  public addfunds(wallets:Wallet)
  {

    return this.httpClient.patch("http://localhost:8090/wallets",wallets,{responseType:"text"});
  }
  

}
