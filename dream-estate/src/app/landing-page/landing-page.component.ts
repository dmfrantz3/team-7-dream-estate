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
  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.$properties = this.propertyService.getPropertyList();
  }

}
