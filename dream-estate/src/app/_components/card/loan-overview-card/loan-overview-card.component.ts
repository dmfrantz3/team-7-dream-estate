import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-overview-card',
  templateUrl: './loan-overview-card.component.html',
  styleUrls: ['./loan-overview-card.component.css']
})
export class LoanOverviewCardComponent implements OnInit {
  @Input() card: any;
  exp_date: any;
  constructor() { }

  ngOnInit(): void {
    
  }
  fund_date(duration:number){
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();
    var mat_date = new Date(year + duration, month, day);
    month = mat_date.getMonth();
    day = mat_date.getDate();
    year = mat_date.getFullYear();
    return month+"/"+day+"/"+year;
  }

}
