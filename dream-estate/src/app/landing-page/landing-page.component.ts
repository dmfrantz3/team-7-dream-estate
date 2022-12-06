import { Component, OnInit } from '@angular/core';
import { Property } from '../_models/property';
import { PropertyService } from '../_services/property.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  $properties?: Observable<Property[]> | undefined;
  type: string = "PROPERTY";
  ownerCard: any;
  lenderCard: any;
  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.ownerCard = {
      buttonUrl: "/funding-application", 
      buttonText: "Let's Get Started!", 
      buttonVar: 1,
      titleId: "owner",
      title:"DreamEstate for Future Home Owners", 
      text:"If you thought home ownership was out of reach, think again. We look beyond credit score and down-payment and focus more on what you are currently paying. Have you been unable to save up for your first home purchase because you have been spending years making your increasing rent payment? With DreamEstate we help you turn your current rental payment into a payment toward ownership of a house of your own."
    }
    this.lenderCard = {
      buttonUrl: "/funding-application", 
      buttonText: "Let's Get Started!", 
      buttonVar: 2,
      titleId: "lender",
      title:"DreamEstate for Lenders", 
      text:"Would you like to earn passive income on your own terms starting with as little as $100? Plus, you can feel good while doing it! Your money will help a deserving applicant purchase their very first home."
    }
  }

}
