import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuyTokensComponent } from './components/buy-tokens/buy-tokens.component';
import { IcoDistributionComponent } from './components/ico-distribution/ico-distribution.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { KycComponent } from './components/kyc/kyc.component';
import { KycFormComponent } from './components/kyc/kyc-form/kyc-form.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ApiIntegrationComponent } from './components/api-integration/api-integration.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'buytokens', component: BuyTokensComponent },
  { path: 'icodistribution', component: IcoDistributionComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'kyc', component: KycComponent },
  { path: 'kyc-form', component: KycFormComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'api-demo', component: ApiIntegrationComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'user-list', component: UsersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
