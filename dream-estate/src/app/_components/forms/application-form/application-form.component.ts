import { Component, OnChanges, Input } from '@angular/core';
import { Application } from 'src/app/_models/application';
import { ApplicationService } from 'src/app/_services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnChanges {
  @Input() card: any;
  @Input() user: any;
  application: Application = {applicationid: 0, userid: 0, appstatusid: 0, personal_statement: "", employment_status: "Y", 
employment_industry: "", employment_duration: 0, yearly_income: 0, rental_history_duration: 0,rental_payment_amount: 0, rental_late_payments: "N"};

  constructor(private router: Router, private applicationService: ApplicationService) { }

  ngOnChanges(): void {
    if (this.card){
      this.application.applicationid = this.card.applicationid;
      this.application.userid = this.card.userid;
      this.application.appstatusid = this.card.appstatusid;
    }
  }
  submitForm(){
    this.application.appstatusid = 2;
    this.applicationService.updateApplication(this.application).subscribe(x=>{
      this.router.navigate(['/applicant-dashboard']);
    });
  }
}
