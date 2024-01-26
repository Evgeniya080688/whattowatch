import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {Films} from '../../types/film';

type FilmsListCardProps = {
  films: Films;
}

function FilmsList(props:FilmsListCardProps): JSX.Element {
  const {films} = props;
  const [activePlayer, setActivePlayer] = useState(-1);
  return (
    <>
      {
        films.map((film, key) => {
          const { id, name, previewImage, videoLink} = film;
          const keyValue = `${key}`;
          return (
            <FilmCard
              id = {id}
              key = {keyValue}
              src={videoLink}
              title={name}
              poster={previewImage}
              isPlaying={id === activePlayer}
              onFocusPlayer = {() => setActivePlayer(activePlayer === id ? -1 : id)}
              onUnFocusPlayer={() => setActivePlayer(-1)}
            />
          );
        })
      }
    </>
  );
}

export default FilmsList;
