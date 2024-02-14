import {Films} from '../../types/film';
import {Link} from 'react-router-dom';

type FilmsListCardProps = {
  films: Films;
  renderPlayer: ( poster: string, src: string, id: number) => JSX.Element;
}

function FilmsList(props:FilmsListCardProps): JSX.Element {
  const {films, renderPlayer} = props;
  return (
    <>
      {
        films.map((film, key) => {
          const { id, name, previewImage, videoLink} = film;
          const keyValue = `${key}`;
          return (
            <article key = {keyValue} className="small-film-card catalog__films-card">
              {renderPlayer(previewImage, videoLink, id )}
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to={`/films/:${id}`}>{name}</Link>
              </h3>
            </article>
          );
        })
      }
    </>
  );
}

export default FilmsList;
