import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuyTokensComponent } from './components/buy-tokens/buy-tokens.component';
import { IcoDistributionComponent } from './components/ico-distribution/ico-distribution.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { KycComponent } from './components/kyc/kyc.component';
import { KycFormComponent } from './components/kyc/kyc-form/kyc-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BuyTokensComponent,
    IcoDistributionComponent,
    TransactionsComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    KycComponent,
    KycFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
