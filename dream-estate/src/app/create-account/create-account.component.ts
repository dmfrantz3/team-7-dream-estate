import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  card:any;
  role_id:number =1; /* 1 - applicant; 2 - investor; 3 - owner*/ 
  title = "First let's create an account.";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.role_id = params['role_id'];
    });
    if (this.role_id == 1){
      this.title = "Home ownership is around the corner! "+this.title;
    }
    if (this.role_id == 2){
      this.title = "Ready to start earning a passing income? "+this.title;
    }
    this.card = {role_id:this.role_id, title:this.title,text:"Fill out the form below to get started with a free account."}
  }

}
