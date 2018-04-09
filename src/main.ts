import { ApplicationRef } from "@angular/core";                 // For debugging
import { enableDebugTools } from "@angular/platform-browser";   // For debugging

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import env from './environment';

if (env.name === 'production') {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.log(err));

// For debugging
platformBrowserDynamic().bootstrapModule(AppModule).then((module) => {
  let applicationRef = module.injector.get(ApplicationRef);
  let appComponent = applicationRef.components[0];
  enableDebugTools(appComponent);
});