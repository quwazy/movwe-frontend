import { Routes } from '@angular/router';

import { LoginView } from './employee/login-view/login-view';
import { ClientView } from './employee/client-view/client-view';
import { EmployeeView } from './employee/employee-view/employee-view';
import { MovieView } from './employee/movie-view/movie-view';

export const routes: Routes = [
  { 
    path: '',
    component: LoginView 
  },
  {
    path: 'client-view',
    component: ClientView
  },
  {
    path: 'employee-view',
    component: EmployeeView
  },
  {
    path: 'movie-view',
    component: MovieView
  }
];
