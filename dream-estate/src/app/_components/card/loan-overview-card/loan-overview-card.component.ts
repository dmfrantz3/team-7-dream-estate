import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-overview-card',
  templateUrl: './loan-overview-card.component.html',
  styleUrls: ['./loan-overview-card.component.css']
})
export class LoanOverviewCardComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit(): void {
  }

}
