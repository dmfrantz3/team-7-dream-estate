import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit(): void {
  }

}
