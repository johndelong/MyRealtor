import { RouterConfig } from '@angular/router';
import { Main } from './';
// import { About } from '../about';
// import { Dashboard } from '../dashboard';
import { Clients } from '../clients';
import { Tasks } from '../tasks';
import { AuthGuard } from '../auth';

export const MAIN_CONTENT_ROUTES: RouterConfig = [
  {
    path: '',
    component: Main,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: Clients },
      { path: 'clients', component: Clients },
      { path: 'checklist', component: Tasks },
    ],
  },
];