import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenth-component',
  templateUrl: './tenth-component.component.html',
  styleUrls: ['./tenth-component.component.css']
})
export class TenthComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("On init");
  }

}
