type FilmCardProps = {
  key: string;
  src: string;
  title: string;
  href: string;
}

function FilmCard({key, src, title, href}:FilmCardProps): JSX.Element {
  return (
    <article key = {key} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={src} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={href}>{title}</a>
      </h3>
    </article>

  );
}

export default FilmCard;
