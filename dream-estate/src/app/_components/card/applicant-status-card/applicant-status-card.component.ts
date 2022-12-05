import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-applicant-status-card',
  templateUrl: './applicant-status-card.component.html',
  styleUrls: ['./applicant-status-card.component.css']
})
export class ApplicantStatusCardComponent implements OnInit {
  @Input() card: any;
  successIcon: string = "check-decagram";
  constructor() { }

  ngOnInit(): void {
  }

}
