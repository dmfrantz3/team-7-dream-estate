import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-lending',
  templateUrl: './start-lending.component.html',
  styleUrls: ['./start-lending.component.css']
})
export class StartLendingComponent implements OnInit {
  lenderCard: any;
  constructor() { }

  ngOnInit(): void {
    this.lenderCard = {
      buttonUrl: "/funding-application", 
      buttonText: "Let's Get Started!", 
      buttonVar: 2,
      title:"DreamEstate for Lenders", 
      titleId: "lender",
      text:"Would you like to earn passive income on your own terms starting with as little as $100? Plus, you can feel good while doing it! Your money will help a deserving applicant purchase their very first home. At DreamEstate, we break large loan requests into small pieces so that you can choose your an amount and terms you are comfortable with."
    }
  }

}
