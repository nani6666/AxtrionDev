import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuyTokensComponent } from './components/buy-tokens/buy-tokens.component';
import { IcoDistributionComponent } from './components/ico-distribution/ico-distribution.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { KycComponent } from './components/kyc/kyc.component';
import { KycFormComponent } from './components/kyc/kyc-form/kyc-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'buytokens', component: BuyTokensComponent },
  { path: 'icodistribution', component: IcoDistributionComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'kyc', component: KycComponent },
  { path: 'kyc-form', component: KycFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
