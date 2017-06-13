import { Component,ViewChild, ElementRef} from '@angular/core';
import { NavController, PopoverController, NavParams } from 'ionic-angular';

@Component({
  template : `
  <ion-list class="popover-page">
        <ion-item class="text-athelas">
          <ion-label>Athelas</ion-label>
          <ion-radio value="Athelas"></ion-radio>
        </ion-item>
        <ion-item class="text-charter">
          <ion-label>Charter</ion-label>
          <ion-radio value="Charter"></ion-radio>
        </ion-item>
        <ion-item class="text-iowan">
          <ion-label>Iowan</ion-label>
          <ion-radio value="Iowan"></ion-radio>
        </ion-item>
        <ion-item class="text-palatino">
          <ion-label>Palatino</ion-label>
          <ion-radio value="Palatino"></ion-radio>
        </ion-item>
        <ion-item class="text-san-francisco">
          <ion-label>San Francisco</ion-label>
          <ion-radio value="San Francisco"></ion-radio>
        </ion-item>
        <ion-item class="text-seravek">
          <ion-label>Seravek</ion-label>
          <ion-radio value="Seravek"></ion-radio>
        </ion-item>
        <ion-item class="text-times-new-roman">
          <ion-label>Times New Roman</ion-label>
          <ion-radio value="Times New Roman"></ion-radio>
        </ion-item>
      </ion-list>
  `
})

export class PopoverPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };
}



@Component({
  selector: 'page-about',
  templateUrl: 'music.html'
})

export class MusicPage {

  constructor(public navCtrl: NavController) {

  }

}
