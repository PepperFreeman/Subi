import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {Router} from '@angular/router';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.page.html',
  styleUrls: ['./match-list.page.scss'],
})
export class MatchListPage implements OnInit {

  public listGame;
  public icon;
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,
              public navCtrl: NavController, private router: Router) {
    this.afAuth.authState.subscribe(
        (auth) => {
          if (auth != null) {
            this.db.list<any>('/Games').valueChanges().subscribe(
                data => {
                  this.listGame = data;
                });
          }
        });

    // switch (this.listGame.gameType.toLowerCase()) {
    //   case 'football': this.icon = "../assets/icon/football.svg";
    //   case 'basketball': this.icon = "../assets/icon/basketball.svg";
    //   case 'baseball': this.icon = "../assets/icon/baseball.svg";
    //   case 'cricket': this.icon = "../assets/icon/cricket.svg";
    //   case 'lacrosse': this.icon = "../assets/icon/lacrosse.svg";
    //   case 'tennis': this.icon = "../assets/icon/tennis.svg";
    //   case 'volleyball': this.icon = "../assets/icon/volleyball.svg";
    //   default : this.icon = "../assets/icon/american-football.svg";
    //
    // }
  }

  ngOnInit() {
  }

}
