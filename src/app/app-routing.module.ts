import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  { path: '', redirectTo: './pages/login', pathMatch: 'full' },
  //  { path: 'account', loadChildren: './pages/account/account.module#AccountModule' },
  { path: 'ambigram', loadChildren: './pages/ambigram/ambigram.module#AmbigramModule' },
  { path: 'app', loadChildren: './pages/tabs-page/tabs-page.module#TabsModule' },
  { path: 'intro', loadChildren: './pages/intro/intro.module#IntroModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'pandas', loadChildren: './pages/pandas/pandas.module#PandasModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignUpModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
