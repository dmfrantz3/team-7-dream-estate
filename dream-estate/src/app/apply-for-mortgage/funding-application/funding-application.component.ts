import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/_models/application';

@Component({
  selector: 'app-funding-application',
  templateUrl: './funding-application.component.html',
  styleUrls: ['./funding-application.component.css']
})
export class FundingApplicationComponent implements OnInit {
  application: Application={};
  constructor() { }

  ngOnInit(): void {
  }

}
