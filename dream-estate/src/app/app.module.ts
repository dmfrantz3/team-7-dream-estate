import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './_components/header/header.component';
import { HeroComponent } from './_components/hero/hero.component';
import { CardComponent } from './_components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './_components/card/user-card/user-card.component';
import { ApplicantStatusCardComponent } from './_components/card/applicant-status-card/applicant-status-card.component';
import { SvgComponent } from './_components/svg/svg.component';
import { FooterComponent } from './_components/footer/footer.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { LenderDashboardComponent } from './lender-dashboard/lender-dashboard.component';
import { LenderCardComponent } from './_components/card/lender-card/lender-card.component';
import { WelcomeCardComponent } from './_components/card/welcome-card/welcome-card.component';
import { ModernCardComponent } from './_components/card/modern-card/modern-card.component';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { LoanOverviewCardComponent } from './_components/card/loan-overview-card/loan-overview-card.component';
import { FormsModule } from '@angular/forms';
import { ApplyForMortgageComponent } from './apply-for-mortgage/apply-for-mortgage.component';
import { FundingApplicationComponent } from './apply-for-mortgage/funding-application/funding-application.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateAccountFormComponent } from './_components/forms/create-account-form/create-account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    HeroComponent,
    CardComponent,
    UserCardComponent,
    ApplicantStatusCardComponent,
    SvgComponent,
    FooterComponent,
    OwnerDashboardComponent,
    LenderDashboardComponent,
    LenderCardComponent,
    WelcomeCardComponent,
    ModernCardComponent,
    ApplicantDashboardComponent,
    LoanOverviewCardComponent,
    ApplyForMortgageComponent,
    FundingApplicationComponent,
    CreateAccountComponent,
    CreateAccountFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
