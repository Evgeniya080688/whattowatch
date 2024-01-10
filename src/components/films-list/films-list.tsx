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
        films.map((film, id) => {
          const keyValue = `${id}`;
          const { videoLink, name, previewImage} = film;
          return (
            <FilmCard key = {keyValue} src={previewImage} title={name} href={videoLink} />
          );
        })
      };
    </>
  );
}

export default FilmsList;
