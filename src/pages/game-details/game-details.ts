import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from "../list/list";
import {GameReviewsPage} from "../game-reviews/game-reviews";

/**
 * Generated class for the GameDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-details',
  templateUrl: 'game-details.html',
})
export class GameDetailsPage {

  game: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    this.game = this.navParams.get('game');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailsPage');
  }

  goToReviews(){
    this.navCtrl.push(GameReviewsPage, {
      game: this.game
    });
  }

}
