export enum AppRoute {
  LogIn = '/login',
  Player = '/player/:id',
  AddReview = '/films/:id/review',
  Main = '/',
  Film = '/films/:id',
  MyList = '/mylist'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Film = '/films/',
  MyList = '/mylist',
  Comments ='/comments/',
}
