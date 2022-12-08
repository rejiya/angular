import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WalletService } from './services/wallet.service';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { UpdationComponent } from './components/updation/updation.component';
import { DeletionComponent } from './components/deletion/deletion.component';
import { DisplayComponent } from './components/display/display.component';
import { AddfundsComponent } from './components/addfunds/addfunds.component';
import { TransferfundsComponent } from './components/transferfunds/transferfunds.component';
import { WalletGuard } from './auth/wallet.guard';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import {DividerModule} from 'primeng/divider';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UpdationComponent,
    DeletionComponent,
    DisplayComponent,
    AddfundsComponent,
    TransferfundsComponent,
    LogoutComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
   
   ],
  providers: [WalletService,WalletGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
