type ButtonMoreProps = {
  showMoreFilms: () => void;
  isMore: boolean;
}

function ButtonMore(props:ButtonMoreProps): JSX.Element {
  const {showMoreFilms, isMore} = props;
  return (
    <div onClick={showMoreFilms} className={`catalog__more ${(!isMore) ? 'visually-hidden' : ''}`}>
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ButtonMore;
