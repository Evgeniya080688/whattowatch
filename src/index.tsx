import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
    <App name={Setting.name} genre= {Setting.genre} releaseDate={Setting.releaseDate} />
  </React.StrictMode>,
);
