import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';
import { Page2Page } from '../page2/page2';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

customer: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public locationTracker: LocationTracker, angFire: AngularFire) {
     this.customer = angFire.database.list('/Customer');

  }

  start(){
    this.locationTracker.startTracking();
  }

  stop(){
    this.locationTracker.stopTracking();
  }

  loadMap() {
  this.navCtrl.push(Page2Page);
}

}
