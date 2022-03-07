import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.css']
})
export class RequestItemComponent implements OnInit {

  @Input() requestItem: any;

  constructor() {
    this.requestItem = {}
   }

  ngOnInit(): void {
  }

}
