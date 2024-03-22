import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Films, Film} from '../types/film';
import {
  loadFilmById,
  loadFilms,
  requireAuthorization,
  setError,
  setFilmsDataLoadingStatus,
  loadSimilarFilms,
  loadCommentsById
} from './action';
import {saveToken, dropToken, getToken} from '../services/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {CommentsData} from '../types/comments-data';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'films/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const fetchFilmByIdAction = createAsyncThunk<void, string|undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const id = _arg;
      const url = String(APIRoute.Film) + String(id);
      const {data} = await api.get<Film>(url);
      dispatch(loadFilmById(data));
    } catch {
      dispatch(setError('not found film'));
    }
  },
) ;

export const fetchSimilarFilmsAction = createAsyncThunk<void, string|undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (_arg, {dispatch, extra: api}) => {
    const id = _arg;
    const url = String(APIRoute.Film) + String(id) + String('/similar');
    const {data} = await api.get<Films>(url);
    dispatch(loadSimilarFilms(data));
  },
);

export const fetchCommentsByIdAction = createAsyncThunk<void, string|undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsById',
  async (_arg, {dispatch, extra: api}) => {
    const id = _arg;
    const url = String(APIRoute.Comments) + String(id);
    const {data} = await api.get<[]>(url);
    dispatch(loadCommentsById(data));
  },
);

export const sendCommentsAction = createAsyncThunk<void, CommentsData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/comment',
  async ({idFilm,comment, rating}, {dispatch, extra: api}) => {
    const url = String(APIRoute.Comments) + String(idFilm);
    await api.post<UserData>(url, {comment, rating});
    //dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
