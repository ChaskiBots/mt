import { Component, OnInit } from '@angular/core';
import {ActionSheetController, Platform, AlertController} from '@ionic/angular';
import {
GoogleMaps,
GoogleMap,
GoogleMapsMapTypeId,
GoogleMapsEvent,
GoogleMapOptions,
CameraPosition,
MarkerOptions,
Marker,
Environment
} from '@ionic-native/google-maps';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { publishFacade } from '@angular/compiler';




@Component({
  selector: 'app-chaskimapa',
  templateUrl: './chaskimapa.page.html',
  styleUrls: ['./chaskimapa.page.scss'],
})
export class ChaskimapaPage implements OnInit {
  map: GoogleMap;

  constructor(
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platforn: Platform

  ) {
    if (this.platforn.is('cordova')){
      this.loadMap();
    }
  }
  loadMap(){
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCE40sN8wzOpf8uorUiRbyMmgSgFynaNt4',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCE40sN8wzOpf8uorUiRbyMmgSgFynaNt4'

    });

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: -0.509457,
          lng: -78.566566
        },
        zoom: 12,
        tilt: 30
      }
    });
  }


  ngOnInit() {
  }


  async mapOptions() {
    const actionSheet = await this.actionCtrl.create({
      buttons: [{
        text: 'Satellite',
        handler: () => {
          console.log('Satellite clicked');
          this.map.setMapTypeId(GoogleMapsMapTypeId.SATELLITE);
        }
      }, {
        text: 'Plan',
        handler: () => {
          console.log('Plan clicked');
          this.map.setMapTypeId(GoogleMapsMapTypeId.NORMAL);
        }
      }, {
        text: 'Terrain',
        handler: () => {
          console.log('Terrain clicked');
          this.map.setMapTypeId(GoogleMapsMapTypeId.TERRAIN);
        }
      }, {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async addMarker() {
    const alert = await this.alertController.create({
      header: 'Ajouter un emplacement',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Le titre'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ajouter',
          handler: data => {
            console.log('Titre: ' + data.title);
            this.placeMarker(data.title);
          }
        }
      ]
    });
    await alert.present();
  }

  placeMarker(markerTitle: string) {
    const marker: Marker = this.map.addMarkerSync({
       title: markerTitle,
       icon: 'red',
       animation: 'DROP',
       position: this.map.getCameraPosition().target
    });
 }


}
