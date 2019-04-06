import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];
  Username;
  Password;
  constructor(public formBuilder: FormBuilder, private  Auth: AuthService, private router: Router, private firebase: AngularFireAuth) {
  }

  ngOnInit() {
  }

  LogIn(e) {
    try {
      const logintarget = e.target;
      this.Username = logintarget.querySelector('#Username').value;
      this.Password = logintarget.querySelector('#Password').value;
      this.firebase.auth.signInWithEmailAndPassword(this.Username, this.Password).then(() => {
        this.Auth.LoggedIn(true);
        this.router.navigate(['/list']);
      }).catch(() => {
        alert('Please Enter a valid account.');
      });
    } catch (e) {
      console.error(e);
    }
  }
}
