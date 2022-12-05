import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lender-card',
  templateUrl: './lender-card.component.html',
  styleUrls: ['./lender-card.component.css']
})
export class LenderCardComponent implements OnChanges {
  @Input() cards: any;
  @Input() user: any;
  termOpts?: number[];
  
  constructor() { }

  ngOnChanges(): void {
    this.termOpts = Array(30).map((x,i)=>i);
  }

}
