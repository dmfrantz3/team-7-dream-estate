import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-loan-card',
  templateUrl: './current-loan-card.component.html',
  styleUrls: ['./current-loan-card.component.css']
})
export class CurrentLoanCardComponent implements OnInit {
  @Input() card:any;
  constructor() { }

  ngOnInit(): void {
  }

}
