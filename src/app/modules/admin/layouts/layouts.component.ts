import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {
  sidenavWidth = 6;
  constructor() { }

  ngOnInit(): void {
  }
  increase() {
    this.sidenavWidth = 15;
  }
  decrease() {
    this.sidenavWidth = 6;
  }
}
