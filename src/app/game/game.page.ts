import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  private sports = [
    'Football',
    'Basketball',
    'American-Football',
    'Tennis',
    'Cricket',
    'Volleyball',
    'Baseball',
    'Lacrosse'
  ];
  public items: Array<{ url: string; name: string }> = [];
  constructor(public navCtrl: NavController) {
    for (let i = 0; i < this.sports.length; i++) {
      this.items.push({
        url: 'assets/img/' + this.sports[i] + '.jpg',
        name: this.sports[i]
      });
    }
  }

  ngOnInit() {
  }

}
