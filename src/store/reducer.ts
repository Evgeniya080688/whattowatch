import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsByGenre, showMoreFilms, loadFilms, requireAuthorization, setError, setFilmsDataLoadingStatus} from './action';
import {Films} from '../types/film';
import {AuthorizationStatus} from '../const';

type InitalState = {
  genre: string;
  filmsList: Films;
  filmsFiltered: Films;
  filmsVisible: Films;
  step: number;
  authorizationStatus: AuthorizationStatus;
  isFilmsDataLoading: boolean;
  error: string | null;
}

const initialState:InitalState = {
  genre: 'All genres',
  filmsList: [],
  filmsFiltered: [],
  filmsVisible: [],
  step: 1,
  authorizationStatus: AuthorizationStatus.Auth,
  isFilmsDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenre,(state, action) => {
      state.filmsFiltered = state.filmsList.filter((filmItem) =>
        (action.payload !== 'All genres') ? filmItem.genre === action.payload : true );
      state.filmsVisible = state.filmsFiltered.slice(0,8);
      state.step = 1;
    })
    .addCase(showMoreFilms,(state) => {
      state.step++;
      state.filmsVisible = state.filmsFiltered.slice(0,8 * state.step);
    })
    .addCase(loadFilms,(state, action) => {
      state.filmsList = action.payload;
      state.filmsFiltered = state.filmsList;
      state.filmsVisible = state.filmsList.slice(0,8);
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
