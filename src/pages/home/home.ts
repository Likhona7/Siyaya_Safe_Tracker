import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';
import { Page2Page } from '../page2/page2';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

location: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public locationTracker: LocationTracker, angFire: AngularFire, public zone: NgZone) {
     this.location = angFire.database.list('/Location');

  }



  start(longitude, latitude){
    this.locationTracker.startTracking();
    this.location.push({
    longitude: this.locationTracker.lng,
    latitude: this.locationTracker.lat,
    Created_date: Date()
    }).then( error =>{
    console.log(error);
    });
  }


  stop(){
    this.locationTracker.stopTracking();
  }

  loadMap() {
  this.navCtrl.push(Page2Page);
}

}
