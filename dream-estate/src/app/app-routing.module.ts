import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LenderDashboardComponent } from './lender-dashboard/lender-dashboard.component';
import { ApplyForMortgageComponent } from './apply-for-mortgage/apply-for-mortgage.component';
import { FundingApplicationComponent } from './apply-for-mortgage/funding-application/funding-application.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'applicant-dashboard',
    component: ApplicantDashboardComponent
  },
  {
    path: 'owner-dashboard',
    component: OwnerDashboardComponent
  },
  {
    path: 'lender-dashboard',
    component: LenderDashboardComponent
  },
  {
    path: 'apply-for-funding',
    component: ApplyForMortgageComponent
  },
  {
    path: 'funding-application',
    component: FundingApplicationComponent
  },
  {
    path: 'create-account/:role_id',
    component: CreateAccountComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
