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
    this.card = {buttonUrl: "/funding-application", 
    buttonText: "Let's Get Started!", 
    buttonVar: 1,
    title:"We are here to help make home ownership possible.", 
    text:"If you thought home ownership was out of reach, think again. We look beyond credit score and down-payment and focus more on what you are currently paying. Have you been unable to save up for your first home purchase because you have been spending years making your increasing rent payment? With DreamEstate we help you turn your current rental payment into a payment toward ownership of a house of your own."}
  }

}
