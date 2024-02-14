import {createAction} from '@reduxjs/toolkit';

export const changeGenge = createAction('films/changeGenge', (value: string) => ({
  payload: value,
}));

export const getFilmsByGenre = createAction('films/getFilmsByGenre',(value: string) => ({
  payload: value,
}));
