import {Film} from '../../types/film';
import {useState} from 'react';
import Tab from '../tab/tab';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';

type TabsProps = {
  film: Film;
}

function Tabs({film}: TabsProps): JSX.Element {
  const {id, scoresCount, rating, description, director, starring, runTime, genre, released} = film;
  const [isActiveTab, setIsActiveTab] = useState(2);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <Tab id={0} title={'Overview'} isActive={isActiveTab} idFilm={id} onClickTab={() => setIsActiveTab(0)}/>
          <Tab id={1} title={'Details'} isActive={isActiveTab} idFilm={id} onClickTab={() => setIsActiveTab(1)}/>
          <Tab id={2} title={'Reviews'} isActive={isActiveTab} idFilm={id} onClickTab={() => setIsActiveTab(2)}/>
        </ul>
      </nav>

      <Overview id={0} isActive={isActiveTab} scoresCount={scoresCount} rating={rating} description={description} director={director} starring={starring} />
      <Details id={1} isActive={isActiveTab} runTime={runTime} genre={genre} released={released} director={director} starring={starring}/>
      <Reviews idTab={2} isActive={isActiveTab}/>
    </div>
  );
}

export default Tabs;
