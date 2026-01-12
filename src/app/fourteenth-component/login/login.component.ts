import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""
  constructor(private auth: AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(["14"]);
      return;
    }
    alert("email or password incorrect");
    this.email = ""
    this.password = ""
  }
}
