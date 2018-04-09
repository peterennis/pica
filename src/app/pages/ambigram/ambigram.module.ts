import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AmbigramPage } from './ambigram';
import { AmbigramPageRoutingModule } from './ambigram-routing.module';

//import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
//import { SchedulePageRoutingModule } from './schedule-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbigramPageRoutingModule
  ],
  declarations: [
    AmbigramPage
//    ScheduleFilterPage
  ],
  entryComponents: [
//    ScheduleFilterPage
  ]
})
export class AmbigramModule { }
