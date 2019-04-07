import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {NavController} from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public currentUser;
  public email;
  public name;
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,
              public navCtrl: NavController) {
    this.afAuth.authState.subscribe(
        (auth) => {
          this.email = auth.email;
          if (auth != null) {
            this.db.object('Profile/'+ auth.uid).valueChanges().subscribe(
                data => {
                  this.currentUser = data;
                });
          }
        });
  }

  ngOnInit() {
  }

}

