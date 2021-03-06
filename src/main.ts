import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { bootstrap } from '@angular/platform-browser-dynamic';

// core
import { AUTH_PROVIDERS } from './app/auth';
import { FIREBASE_APP_PROVIDERS } from './firebase';
import { SERVICE_PROVIDERS }  from './app/services';

// routes
import { ROUTER_PROVIDERS } from './app/routes';

// root component
import { App } from './app';

// common styles
import './common/styles.scss';


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


bootstrap(App, [
  disableDeprecatedForms(),
  provideForms(),
  AUTH_PROVIDERS,
  FIREBASE_APP_PROVIDERS,
  ROUTER_PROVIDERS,
  SERVICE_PROVIDERS
]).catch((error: Error) => console.error(error));
