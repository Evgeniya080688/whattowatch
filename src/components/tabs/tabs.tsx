import {Film} from '../../types/film';
import {useState} from 'react';
import Tab from '../tab/tab';

type TabsProps = {
  film: Film;
}

function Tabs({film}: TabsProps): JSX.Element {
  const {scoresCount, rating, description, director, starring, runTime, genre, released} = film;
  const [isActiveTab, setIsActiveTab] = useState(2);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <Tab id={0} title={'Over'} isActive={false}/>
          <li className={`film-nav__item ${(isActiveTab === 1) ? 'film-nav__item--active' : ''}`}>
            <a href="#" className="film-nav__link">Overview</a>
          </li>
          <li className={`film-nav__item ${(isActiveTab === 2) ? 'film-nav__item--active' : ''}`}>
            <a href="#" className="film-nav__link">Details</a>
          </li>
          <li className={`film-nav__item ${(isActiveTab === 3) ? 'film-nav__item--active' : ''}`}>
            <a href="#" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>

      <div className="film-rating">
        <div className="film-rating__score">{scoresCount}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{rating} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {description}

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring}
          </strong>
        </p>
      </div>

      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {starring}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{runTime}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{released}</span>
          </p>
        </div>
      </div>

      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Lorem</p>

              <footer className="review__details">
                <cite className="review__author">Kate Muir</cite>
                <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,9</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Lorem</p>

              <footer className="review__details">
                <cite className="review__author">Bill Goodykoontz</cite>
                <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,0</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Lorem</p>

              <footer className="review__details">
                <cite className="review__author">Amanda Greever</cite>
                <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,0</div>
          </div>
        </div>
        <div className="film-card__reviews-col">
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Lorem</p>

              <footer className="review__details">
                <cite className="review__author">Matthew Lickona</cite>
                <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">7,2</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Lorem</p>

              <footer className="review__details">
                <cite className="review__author">Paula Fleri-Soler</cite>
                <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">7,6</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Lorem</p>

              <footer className="review__details">
                <cite className="review__author">Paula Fleri-Soler</cite>
                <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">7,0</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Tabs;
