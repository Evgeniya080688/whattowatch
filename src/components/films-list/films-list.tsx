//import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {Films} from '../../types/film';

type FilmsListCardProps = {
  films: Films;
}

function FilmsList(props:FilmsListCardProps): JSX.Element {
  const {films} = props;
  // const [activeCard, setActiveCard] = useState(0);
  return (
    <>
      {
        films.map((film, key) => {
          const { id, name, previewImage, videoLink} = film;
          const keyValue = `${key}`;
          return (
            <FilmCard id = {id} key = {keyValue} src={videoLink} title={name} poster={previewImage}/>
          );
        })
      }
    </>
  );
}

export default FilmsList;
