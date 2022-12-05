import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-for-mortgage',
  templateUrl: './apply-for-mortgage.component.html',
  styleUrls: ['./apply-for-mortgage.component.css']
})
export class ApplyForMortgageComponent implements OnInit {
  card:any;
  constructor() { }

  ngOnInit(): void {
    this.card = {buttonUrl: "/funding-application", buttonText: "Let's Get Started!", title:"We are here to help make home ownership possible.", text:"Fill out our simple profile form in less than 10 minutes. We will review and verify your information to determine an affordable monthly payment. If approved, your application will be put in front of a crowd of investors looking to fund home buyers just like you!"}
  }

}
