import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {

  surname = "Smith";

  showFullName(fullName: Event) {
    alert(fullName);
  }

}
