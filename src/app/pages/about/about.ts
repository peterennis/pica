import { Component, ViewEncapsulation } from '@angular/core';

//import { PopoverController } from '@ionic/angular';

//import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor( ) { }

//  async presentPopover(event: Event) {
//    const popover = await this.popoverCtrl.create({
//      component: PopoverPage,
//      ev: event
//    });
//    await popover.present();
//  }
}
