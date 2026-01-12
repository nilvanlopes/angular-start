import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  isLogged(): boolean{
    return !!sessionStorage.getItem("access-token");
  }
  login(email: string, password: string) {
    if (email === "a" && password === "a") {
      sessionStorage.setItem("access-token", "pretendThisIsaJWT");
      return true;
    }
    return false;
  }
  logout() {
    sessionStorage.clear();
  }
}
