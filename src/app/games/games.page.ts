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
  GameTime;
  GameDate;
  UserName;
  Password;

  constructor(private  router: Router, private Auth: AuthService, private firebaseA: AngularFireAuth,
    private FirebaseDB: AngularFireDatabase) { }

  ngOnInit() {
  }
    createGame() {
      try {

          this.firebaseA.authState.subscribe(auth => {
            // @ts-ignore
            this.FirebaseDB.object(`Games/${auth.uid}`).set({
              gameType: this.gameType.toString(),
              playAddress: this.playAddress,
              people: this.people,
              time: this.GameTime,
              date: this.GameDate
            }) .then();
          });
          alert('Create Game Successful!'); this.router.navigate(['/home']);
      } catch (e) {
      }
    }


}
