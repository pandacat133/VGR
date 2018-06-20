import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamePicsPage } from './game-pics';

@NgModule({
  declarations: [
    GamePicsPage,
  ],
  imports: [
    IonicPageModule.forChild(GamePicsPage),
  ],
})
export class GamePicsPageModule {}
