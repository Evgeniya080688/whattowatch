import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsByGenre} from './action';
import {films} from './../mocks/films';

const initialState = {
  genre: 'All genres',
  filmsList: films,
  filmsFiltered: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenre,(state, action) => {
      state.filmsFiltered = state.filmsList.filter((filmItem) =>
        (action.payload !== 'All genres') ? filmItem.genre === action.payload : true );
    });
});

export {reducer};
