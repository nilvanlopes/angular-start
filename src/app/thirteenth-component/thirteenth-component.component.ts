import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thirteenth-component',
  templateUrl: './thirteenth-component.component.html',
  styleUrls: ['./thirteenth-component.component.css'],
})
export class ThirteenthComponentComponent implements OnInit {
  id: number | null = null;
  name: string | null = '';
  age: number | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });

    this.route.queryParamMap.subscribe((params) => {
      this.name = params.get('name');
      this.age = Number(params.get('age'));
    });
  }
}
