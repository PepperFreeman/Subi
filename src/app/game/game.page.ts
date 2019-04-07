import { Component, OnInit } from '@angular/core';
import {HomePage} from '../home/home.page';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  tab1Root = HomePage;
  tab2Root = HomePage;
  tab3Root = HomePage;
  constructor() {
   }

  ngOnInit() {
  }

}
