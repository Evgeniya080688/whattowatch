import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsByGenre, showMoreFilms} from './action';
import {films} from './../mocks/films';

const initialState = {
  genre: 'All genres',
  filmsList: films,
  filmsFiltered: films,
  filmsVisible: films.slice(0,8),
  step: 1
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
    });
});

export {reducer};
