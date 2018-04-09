import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs-page';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { AmbigramPage } from '../ambigram/ambigram';
//import { SessionDetailPage } from '../session-detail/session-detail';
//import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';
import { PandasPage } from '../pandas/pandas';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // tab one
      {
        path: 'ambigram',
        component: AmbigramPage,
        outlet: 'ambigram'
      },
//      {
//        path: 'session/:sessionId',
//        component: SessionDetailPage,
//        outlet: 'schedule'
//      },
      // tab two
      {
        path: 'pandas',
        component: PandasPage,
        outlet: 'pandas'
      },

//      {
//        path: 'session/:sessionId',
//        component: SessionDetailPage,
//        outlet: 'speakers'
//      },
//      {
//        path: 'speaker-details/:speakerId',
//        component: SpeakerDetailPage,
//        outlet: 'speakers'
//      },
      // tab three
      {
        path: 'map',
        component: MapPage,
        outlet: 'map'
      },

      // tab four
      {
        path: 'about',
        component: AboutPage,
        outlet: 'about'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
