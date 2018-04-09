import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmbigramPage } from './ambigram';

const routes: Routes = [
  { path: '', component: AmbigramPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbigramPageRoutingModule { }
