import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-applicant-status-card',
  templateUrl: './applicant-status-card.component.html',
  styleUrls: ['./applicant-status-card.component.css']
})
export class ApplicantStatusCardComponent implements OnInit {
  @Input() card: any;
  @Input() application: any;
  useIcon: string = "check-decagram";
  successIcon: string = "check-decagram";
  alertCircle: string = "alert-circle";
  constructor() { }

  ngOnInit(): void {
    if (this.card)
      console.log(this.card.email);
    if (this.application)
      console.log(this.application);
  }
  getIcon(status:number): String{
    switch(status){
      case 1: 
        return this.alertCircle;
      default: 
        return this.successIcon;
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
