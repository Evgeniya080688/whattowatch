import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {AuthorizationStatus} from '../const';

export const changeGenre = createAction('films/changeGenge', (value: string) => ({
  payload: value,
}));

export const getFilmsByGenre = createAction('films/getFilmsByGenre',(value: string) => ({
  payload: value,
}));

export const showMoreFilms = createAction('films/showBtnMore');

export const loadFilms = createAction<Films>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('films/setError');
