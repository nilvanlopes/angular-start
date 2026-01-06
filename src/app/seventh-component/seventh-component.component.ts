import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seventh-component',
  templateUrl: './seventh-component.component.html',
  styleUrls: ['./seventh-component.component.css']
})
export class SeventhComponentComponent {
  @Input() name = ""
  @Input() surname = ""

}
