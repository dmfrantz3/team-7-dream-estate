import { Component, OnInit, Input } from '@angular/core';
import { Pledge } from 'src/app/_models/pledge';
import { ApplicationService } from 'src/app/_services/application.service';

@Component({
  selector: 'app-modern-card',
  templateUrl: './modern-card.component.html',
  styleUrls: ['./modern-card.component.css']
})
export class ModernCardComponent implements OnInit {
  @Input() card: any;
  @Input() user: any;
  pledge: Pledge = {applicationid: 1, userid: 2, fund_amount: 100, fund_apr: 6.07, fund_duration: 1};
  cardDisplay:any;
  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
  }
  submitForm(applicationid:number) {
    this.pledge.userid=this.user.userid;
    this.pledge.applicationid = applicationid;
    this.applicationService.postPledge(this.pledge).subscribe(data =>{
      this.pledge = data;
      this.cardDisplay = "off";
    });
  }
  calculateApy(){
    this.pledge.fund_apr = Math.round(((0.016 * this.pledge.fund_duration) + 0.25 + this.card.application_funding.risk_score) * 100) / 100;
  }

}
