import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component ({
  selector: 'page-vimeo',
  template:`
  <ion-header>

  <ion-navbar>

  <ion-title>Latest Film</ion-title>

  </ion-navbar>

  <ion-content>

  <iframe src="https://player.vimeo.com/video/54047894?color=f5e842&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

  </ion-content>

  `
})

export class VimeoVideo {

  constructor(public navCtrl: NavController) {

  }
}
