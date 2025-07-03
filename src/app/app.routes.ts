import { Routes } from '@angular/router';

import { LoginView } from './employee/login-view/login-view';
import { ClientView } from './employee/client-view/client-view';
import { EmployeeView } from './employee/employee-view/employee-view';
import { MovieView } from './employee/movie-view/movie-view';

import { LoginViewClient } from './client/login-view/login-view';
import { MovieViewClient } from './client/movie-view/movie-view';
import { AddMovieView } from './client/add-movie-view/add-movie-view';
import { FriendView } from './client/friend-view/friend-view';
import { SearchFriendView } from './client/search-friend-view/search-friend-view';

export const routes: Routes = [
  // Client routes
  {
    path: '',
    component: LoginViewClient
  },
  {
    path: 'movie-view-client',
    component: MovieViewClient
  },
  {
    path: 'add-movie',
    component: AddMovieView
  },
  {
    path: 'friend-view',
    component: FriendView
  },
  {
    path: 'search-friend',
    component: SearchFriendView
  },
  // Employee routes
  {
    path: 'employee-login',
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
