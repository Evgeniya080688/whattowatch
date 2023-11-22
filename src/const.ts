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
