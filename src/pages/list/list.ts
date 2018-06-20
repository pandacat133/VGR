import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GameDetailsPage} from "../game-details/game-details";

@Component({
  selector: 'page-    this.navCtrl.push(\'ItemDetailPage\', {\n' +
  '      item: item\n' +
  '    });',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  games: Array<{title: string, id: string, note: string, icon: string}>;
  sortBy: string;
  titlesArray: string[] = ['Firewatch',
    'Cart Life',
    'Bioshock Infinite',
    'The Walking Dead',
    'Star Fox 64',
    'Xenoblade Chronicles',
    'The Witness',
    'Kentucky Route Zero',
    'Grand Theft Auto',
    'Uncharted',
    'Ico',
    'The Talos Principle'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.sortBy = navParams.get('sortKeyName');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.games = [];
    for (let i = 1; i < 11; i++) {
      this.games.push({
        title: this.titlesArray[i],
        id: String(Math.floor(Math.random() * 1000)),
        note: 'This is game id: ',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, game) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(GameDetailsPage, {
      game: game
    });
  }
}
