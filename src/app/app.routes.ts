import { Routes } from '@angular/router';
import { LoginView } from './employee/login-view/login-view';
import { ClientView } from './employee/client-view/client-view';
import { EmployeeView } from './employee/employee-view/employee-view';
import { MovieView } from './employee/movie-view/movie-view';
import { LoginViewClient } from './client/login-view/login-view';
import { SignInView } from './client/sign-in-view/sign-in-view';
import { MovieViewClient } from './client/movie-view/movie-view';
import { AddMovieView } from './client/add-movie-view/add-movie-view';
import { FriendView } from './client/friend-list-view/friend-view';
import { SearchFriendView } from './client/search-friend-view/search-friend-view';
import { VisitFriendView } from './client/visit-friend-view/visit-friend-view';

//nove rute
import { Login } from './admin/login/login';
import { ViewUsers } from './admin/view-users/view-users';
import { ViewModerators } from './admin/view-moderators/view-moderators';
import { ViewMovies } from './admin/view-movies/view-movies';

export const routes: Routes = [
  //ADMIN routes
  {
    path: 'admin/login',
    component: Login
  },
  {
    path: 'admin/view-users',
    component: ViewUsers
  },
  {
    path: 'admin/view-moderators',
    component: ViewModerators
  },
  {
    path: 'admin/view-movies',
    component: ViewMovies
  },
  // Client routes
  {
    path: '',
    component: LoginViewClient
  },
  {
    path: 'sign-in',
    component: SignInView
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
  {
    path: 'visit-friend/:username',
    component: VisitFriendView
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
