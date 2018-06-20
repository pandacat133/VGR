import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ContactUsPage} from "../pages/contact-us/contact-us";
import {GameDetailsPage} from "../pages/game-details/game-details";
import {GamePicsPage} from "../pages/game-pics/game-pics";
import {GameReviewsPage} from "../pages/game-reviews/game-reviews";
import {HelpPage} from "../pages/help/help";
import {LoginPage} from "../pages/login/login";
import {SearchPage} from "../pages/search/search";
import {UserProfilePage} from "../pages/user-profile/user-profile";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactUsPage,
    GameDetailsPage,
    GamePicsPage,
    GameReviewsPage,
    HelpPage,
    LoginPage,
    SearchPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactUsPage,
    ContactUsPage,
    GameDetailsPage,
    GamePicsPage,
    GameReviewsPage,
    HelpPage,
    LoginPage,
    SearchPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
