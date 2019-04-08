import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {NavController, NavParams} from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {Router} from '@angular/router';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.page.html',
  styleUrls: ['./match-detail.page.scss'],
})
export class MatchDetailPage implements OnInit {

  public currentUser;
  public email;
  public name;
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,
              public navCtrl: NavController,  public navParams: NavParams) {
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
