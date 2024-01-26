type TabProps = {
  id: number;
  title: string;
  isActive: boolean;
}

function Tab({id, title, isActive}: TabProps): JSX.Element {

  return (
    <li className={`film-nav__item ${(isActive) ? 'film-nav__item--active' : ''}`}>
      <a href="#" className="film-nav__link">{title}</a>
    </li>
  );
}

export default Tab;
