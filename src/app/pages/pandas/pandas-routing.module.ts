import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PandasPage } from './pandas';
const routes: Routes = [{ path: '', component: PandasPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PandasPageRoutingModule {}
