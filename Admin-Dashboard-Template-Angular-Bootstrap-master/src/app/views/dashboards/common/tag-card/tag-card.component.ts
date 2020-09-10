import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.scss']
})
export class TagCardComponent implements OnInit {

  constructor() { }
  title:any = "JAVASCRIPT";
   issues = [] as any;
  ngOnInit() {
  of(this.getIssues()).subscribe(issues => {
        this.issues = issues;
      });
  }
getIssues() {
    return  [
                 { id: '1', name: 'selenium' , title:'Javascript'},
                 { id: '2', name: 'appium',  title:'Javascript' },
                 { id: '3', name: 'istqb', title:'Javascript' },
                 { id: '4', name: 'test automation', title:'Javascript' }
               ];

  }
}
