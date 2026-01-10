import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleventh-component',
  templateUrl: './eleventh-component.component.html',
  styleUrls: ['./eleventh-component.component.css']
})
export class EleventhComponentComponent  {

  constructor(private router : Router) { }

  goToFirst() {
    this.router.navigate(["1"]);
  }

}
