import { Component, OnInit } from '@angular/core';
import { Phone } from '../types/phone';

@Component({
  selector: 'app-sixt-component',
  templateUrl: './sixt-component.component.html',
  styleUrls: ['./sixt-component.component.css'],
})
export class SixtComponentComponent {
  phones: Phone[] = [
    { id: 1, name: 'Iphone 13', description: "don't buy this", soldOut: true },
    { id: 2, name: 'Flip 7', description: 'too expensive', soldOut: false },
    { id: 3, name: 'Fold 4', description: 'almost good', soldOut: true },
  ];
}
