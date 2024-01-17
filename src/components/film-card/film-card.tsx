import {Link } from 'react-router-dom';

type FilmCardProps = {
  id: number;
  key: string;
  src: string;
  title: string;
}

function FilmCard({id, key, src, title}:FilmCardProps): JSX.Element {
  return (
    <article key = {key} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={src} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/:${id}`}>{title}</Link>
      </h3>
    </article>

  );
}

export default FilmCard;
