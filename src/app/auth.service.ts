import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private SignedInStatus = false;
  constructor() { }

  value: boolean;

  LoggedIn(value) {
    this.value = value;
    this.SignedInStatus = this.value;
  }

  get isSignedIn() {
    return this.SignedInStatus;
  }
}
