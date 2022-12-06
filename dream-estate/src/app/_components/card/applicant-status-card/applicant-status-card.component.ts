import { Component, OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-applicant-status-card',
  templateUrl: './applicant-status-card.component.html',
  styleUrls: ['./applicant-status-card.component.css']
})
export class ApplicantStatusCardComponent implements OnChanges {
  @Input() card: any;
  @Input() application: any;
  useIcon: string = "check-decagram";
  successIcon: string = "check-decagram";
  alertCircle: string = "alert-circle";
  constructor() { }

  ngOnChanges(): void {

  }
  getIcon(status:number): String{
    switch(status){
      case 1: 
        return this.alertCircle;
      default: 
        return this.successIcon;
    }
  }
  getNextSteps(status:number): string{
    switch(status){
      case 1: 
        return "Your Application is not yet complete. Please complete the application and submit it for review so we can begin verifying your information and calculating what you can afford.";
      case 2: 
      case 3:
        return "Our team is reviewing your application. We are crunching the numbers to find an affordable monthly payment and loan amount consistent with your rental history. If approved, that means we think you are a good fit for our investors. Approved applications get placed in front of investors looking to fund home purchases like yours!";
      case 4:
        return "Congratuations! We think you would be a great fit for our program. We are submitting your information to lenders for funding. If we are able to fully fund your application within 30 days, you will be on your way to picking out a new home.";
      case 5:
        return "Wow! It is time to get excited. Your application was fully funded. One of our brokers will reach out to you soon through your contact information to help you put in an offer for your new home.";
      case 6: 
        return "Unfortunately we weren't able to receive enough information to approve you at this time, but don't worry because you can apply again in as early as one month. Make sure to gather all relevant information and most importantly we want to see you consistently making your rental payments on time!";
      case 7:
        return "Our lenders are working on funding your application as we speak. Within 30 days, you will be notified if funding was successful.";
      case 8:
        return "Unfortunately we weren't able to get enough interest in your application from lenders. This typically happens when the interest rate needed to make your payment affordable is not appealing to our lenders or they have assessed the risk as too great to invest. Don't worry because we will work with you to strengthen your application and resubmit to our lenders in 30 days.";
      default: 
        return "We are working on getting you into your home.";
    }
  }
  getStatusText(status:number): String{
    switch(status){
      case 1:
        return 'INCOMPLETE';
      case 2:
      case 3:
        return 'SUBMITTED';
      case 4:
        return 'APPROVED';
      case 5: 
        return 'FUNDED';
      case 6:
        return 'REJECTED';
      case 7:
        return 'AWAITING FUNDING';
      case 8:
        return 'NOT FUNDED';
      default:
        return 'ERROR';
    }

  }

}
