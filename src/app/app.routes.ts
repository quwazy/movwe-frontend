import { Routes } from '@angular/router';

import { LoginView } from './employee/login-view/login-view';
import { ClientView } from './employee/client-view/client-view';

export const routes: Routes = [
  { 
    path: 'login',
    component: LoginView 
  },
  {
    path: 'client-view',
    component: ClientView
  }
];
