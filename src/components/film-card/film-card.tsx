import {Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  id: number;
  key: string;
  src: string;
  title: string;
  poster: string;
}

function FilmCard({id, key, src, title, poster}:FilmCardProps): JSX.Element {
  return (
    <article key = {key} className="small-film-card catalog__films-card">
      {/*<img src={poster} alt={title} width="280" height="175"/>*/}
      <VideoPlayer autoPlay={false} poster={poster} src={src} />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/:${id}`}>{title}</Link>
      </h3>
    </article>

  );
}

export default FilmCard;
