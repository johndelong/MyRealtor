import { PLATFORM_DIRECTIVES } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig }  from '@angular/router';

import { AuthGuard, UnauthGuard } from './auth';
import { SignIn } from './sign-in';
import { Tasks } from './tasks';
import { Clients } from './clients';


const routes: RouterConfig = [
  {path: '', component: SignIn, canActivate: [UnauthGuard]},
  {path: 'tasks', component: Tasks, canActivate: [AuthGuard]},
  {path: 'clients', component: Clients, canActivate: [AuthGuard]}
];


export const ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];
