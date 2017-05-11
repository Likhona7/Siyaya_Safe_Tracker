import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page2Page } from '../pages/page2/page2';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';


import { LocationTracker } from '../providers/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';


export const firebaseConfig = {
  apiKey: "AIzaSyCWqU6TC2WZpdyffBLxlIft_399ncE2C5o",
  authDomain: "siyayasafe-1493818408473.firebaseapp.com",
  databaseURL: "https://siyayasafe-1493818408473.firebaseio.com",
  projectId: "siyayasafe-1493818408473",
  storageBucket: "siyayasafe-1493818408473.appspot.com",
  messagingSenderId: "42247695205"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page2Page
  ],
  providers: [
    LocationTracker,
    BackgroundGeolocation,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
