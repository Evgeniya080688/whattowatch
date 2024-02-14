import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {films} from './mocks/films';
import {store} from './store';

const Setting = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: '2014'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        name={Setting.name}
        genre= {Setting.genre}
        releaseDate={Setting.releaseDate}
        films = {films}
      />
    </Provider>
  </React.StrictMode>,
);
