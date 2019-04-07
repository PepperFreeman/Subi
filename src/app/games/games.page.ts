import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  gameType;
  playAddress;
  userId;
  gameId;
  people;
  total;
  time;
  date;
  UserName;
  Password;

  constructor(private  router: Router, private Auth: AuthService, private firebaseA: AngularFireAuth,
    private FirebaseDB: AngularFireDatabase) { }

  ngOnInit() {
  }
    createGame() {
      try {
        this.firebaseA.auth.createUserWithEmailAndPassword(this.UserName, this.Password).then(() => {
          this.userId = this.firebaseA.auth.currentUser;
          this.firebaseA.authState.subscribe(auth => {
            // @ts-ignore
            this.FirebaseDB.object(`Games/${auth.uid}`).set({
              userid: this.userId,
              gameid: this.gameId,
              gameType: this.gameType,
              playAddress: this.playAddress,
              people: this.people,
              total: this.total,
              expired: true,
              time: this.time,
              date: this.date
            }) .then();
          });
          alert('Create Game Successful!'); this.router.navigate(['/home']);
        }).catch(() => {
          alert('invalid address');
        });
      } catch (e) {
      }
    }


}
