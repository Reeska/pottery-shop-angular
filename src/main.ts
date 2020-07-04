import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {defineCustomElements, applyPolyfills} from '@pottery-ui/core/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

applyPolyfills().then(() => defineCustomElements());

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
