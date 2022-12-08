import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletGuard } from './auth/wallet.guard';
import { AddfundsComponent } from './components/addfunds/addfunds.component';
import { DeletionComponent } from './components/deletion/deletion.component';
import { DisplayComponent } from './components/display/display.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { TransferfundsComponent } from './components/transferfunds/transferfunds.component';
import { UpdationComponent } from './components/updation/updation.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'updation', component:UpdationComponent, canActivate:[WalletGuard] },
  {path:'deletion', component:DeletionComponent,canActivate:[WalletGuard]},
  {path:'display', component:DisplayComponent,canActivate:[WalletGuard]},
  {path:'addfunds', component:AddfundsComponent,canActivate:[WalletGuard]},
  {path:'transferfunds', component:TransferfundsComponent,canActivate:[WalletGuard]},
  {path:'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
