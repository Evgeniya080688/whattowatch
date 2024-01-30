type OverviewProps = {
  id: number;
  isActive: number;
  scoresCount: number;
  rating: number;
  description: string;
  director: string;
  starring: [string];

}

function Overview({id, isActive,scoresCount, rating, description, director, starring}:OverviewProps): JSX.Element {

  return (
    <>
      <div className={`film-rating ${(isActive !== id) ? 'visually-hidden' : ''}`}>
        <div className="film-rating__score">{scoresCount}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{rating} ratings</span>
        </p>
      </div>

      <div className={`film-card__text ${(isActive !== id) ? 'visually-hidden' : ''}`}>
        {description}

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring}
          </strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
