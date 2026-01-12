import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourteenth-component',
  templateUrl: './fourteenth-component.component.html',
  styleUrls: ['./fourteenth-component.component.css'],
})
export class FourteenthComponentComponent implements OnInit {
  constructor(private auth: AuthServiceService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    this.router.navigate(['1']);
  }
}
