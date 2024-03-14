import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  getFilmsByGenre,
  showMoreFilms,
  loadFilms,
  requireAuthorization,
  setError,
  setFilmsDataLoadingStatus,
  setFilmDataLoadingStatus,
  loadFilmById, loadSimilarFilms, loadCommentsById
} from './action';
import {Films, Film} from '../types/film';
import {AuthorizationStatus} from '../const';

type InitalState = {
  genre: string;
  filmsList: Films;
  filmsFiltered: Films;
  filmsVisible: Films;
  filmCurrent: Film;
  similarFilms: Films;
  filmComments: [];
  step: number;
  authorizationStatus: AuthorizationStatus;
  isFilmsDataLoading: boolean;
  isFilmDataLoading: boolean;
  error: string | null;
}

const initialState:InitalState = {
  genre: 'All genres',
  filmsList: [],
  filmsFiltered: [],
  filmsVisible: [],
  filmCurrent: {name:'',posterImage:'',previewImage:'',backgroundImage: '',backgroundColor: '',description:'',rating:9.9,scoresCount:276395,director:'',starring:[''],runTime:229,genre:'',released:1984,'id':-1,'isFavorite':false,videoLink:'',previewVideoLink:''},
  similarFilms: [],
  filmComments: [],
  step: 1,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading: false,
  isFilmDataLoading: false,
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
    .addCase(loadSimilarFilms,(state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadFilmById,(state, action) => {
      state.filmCurrent = action.payload;
    })
    .addCase(loadCommentsById, (state, action) => {
      state.filmComments = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setFilmDataLoadingStatus, (state, action) => {
      state.isFilmDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
