import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PandasPage } from './pandas';
import { PandasPageRoutingModule } from './pandas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PandasPageRoutingModule
  ],
  declarations: [PandasPage],
})
export class PandasModule {}
