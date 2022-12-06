import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LenderDashboardComponent } from './lender-dashboard/lender-dashboard.component';
import { ApplyForMortgageComponent } from './apply-for-mortgage/apply-for-mortgage.component';
import { FundingApplicationComponent } from './apply-for-mortgage/funding-application/funding-application.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StartLendingComponent } from './start-lending/start-lending.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './_services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'applicant-dashboard',
    component: ApplicantDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'owner-dashboard',
    component: OwnerDashboardComponent
  },
  {
    path: 'lender-dashboard',
    component: LenderDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'apply-for-funding',
    component: ApplyForMortgageComponent
  },
  {
    path: 'funding-application',
    component: FundingApplicationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-account/:role_id',
    component: CreateAccountComponent
  },
  {
    path: 'start-lending',
    component: StartLendingComponent
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
