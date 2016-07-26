import { PLATFORM_DIRECTIVES } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig }  from '@angular/router';

import { UnauthGuard } from './auth';
import { SignIn } from './sign-in';
import { NoContent } from './no-content';
import { MAIN_CONTENT_ROUTES } from './main-content';


const routes: RouterConfig = [
  ...MAIN_CONTENT_ROUTES,
  {path: 'login', component: SignIn, canActivate: [UnauthGuard]},
  { path: '**', component: NoContent },
  // {path: 'tasks', component: Tasks, canActivate: [AuthGuard]},
  // {path: 'clients', component: Clients, canActivate: [AuthGuard]}
];


export const ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];
