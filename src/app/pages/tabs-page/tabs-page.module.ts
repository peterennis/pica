import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { MapModule } from '../map/map.module';

import { AmbigramPage } from '../ambigram/ambigram';
import { AmbigramPageRoutingModule } from '../ambigram/ambigram-routing.module';

import { PandasPage } from '../pandas/pandas';
import { PandasPageRoutingModule } from '../pandas/pandas-routing.module';

@NgModule({
  imports: [
    AmbigramPageRoutingModule,
    AboutModule,
    CommonModule,
    IonicModule,
    MapModule,
//    SessionDetailModule,
//    SpeakerDetailModule,
    PandasPageRoutingModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
