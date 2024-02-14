import {createReducer} from '@reduxjs/toolkit';
import {changeGenge, getFilmsByGenre} from './action';
import {films} from './../mocks/films';

const initialState = {
  genre: 'All genres',
  filmsList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenge, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenre,(state, action) => {
      state.filmsList = state.filmsList.filter((filmItem) =>
        (action.payload !== 'All genres') ? filmItem.genre === action.payload : true );
    });
});

export {reducer};
