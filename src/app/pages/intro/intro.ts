import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';

//import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  styleUrls: ['./intro.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IntroPage {
  showSkip = true;

  @ViewChild('slides') slides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) {}

  ngOnInit() {
    this.storage.get('ion_did_intro').then(res => {
      if (res) {
        this.router.navigateByUrl('/app/tabs/(ambigram:ambigram)');
      }
    });
  }

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/(ambigram:ambigram)')
      .then(() => this.storage.set('ion_did_intro', 'true'));
  }

  onSlideChangeStart(event) {
    this.showSkip = !event.target.isEnd();
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidEnter() {
    this.slides.nativeElement.update();
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the intro page
    this.menu.enable(true);
  }
}
