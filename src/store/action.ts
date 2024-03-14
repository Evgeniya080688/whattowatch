import {createAction} from '@reduxjs/toolkit';
import {Films, Film} from '../types/film';
import {AuthorizationStatus} from '../const';

export const changeGenre = createAction('films/changeGenge', (value: string) => ({
  payload: value,
}));

export const getFilmsByGenre = createAction('films/getFilmsByGenre',(value: string) => ({
  payload: value,
}));

// export const setError = createAction('films/getFilmsByGenre',(value: boolean) => ({
//   payload: value,
// }));

export const showMoreFilms = createAction('films/showBtnMore');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');

export const loadFilmById = createAction<Film>('data/loadFilmById');

export const loadCommentsById = createAction<[]>('data/loadCommentsById');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('films/setError');
