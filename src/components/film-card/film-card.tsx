import {Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  id: number;
  key: string;
  src: string;
  title: string;
  poster: string;
  isPlaying: boolean;
  onFocusPlayer: () => void;
  onUnFocusPlayer: () => void;

}

function FilmCard({id, key, src, title, poster, isPlaying, onFocusPlayer, onUnFocusPlayer}:FilmCardProps): JSX.Element {

  return (
    <article key = {key} className="small-film-card catalog__films-card">
      <VideoPlayer
        poster={poster}
        src={src}
        isPlaying={isPlaying}
        onFocusPlayer={onFocusPlayer}
        onUnFocusPlayer={onUnFocusPlayer}

      />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>

  );
}

export default FilmCard;
