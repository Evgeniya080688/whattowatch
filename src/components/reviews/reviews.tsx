import {fetchCommentsByIdAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';

type ReviewsProps = {
  idTab: number;
  isActive: number;
}

function Reviews({idTab, isActive}:ReviewsProps): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  dispatch(fetchCommentsByIdAction(id));
  const comments = useAppSelector((state) => state.filmComments);

  return (
    <div className={`film-card__reviews film-card__row ${(isActive !== idTab) ? 'visually-hidden' : ''}`} >
      <div className="film-card__reviews-col">
        {
          comments.map((commentItem, key) => {
            const { user, rating, comment, date} = commentItem;
            const {name} = user;
            const keyValue = `${key}`;
            return (
              <div className="review" key = {keyValue}>
                <blockquote className="review__quote">
                  <p className="review__text">{comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{name}</cite>
                    <time className="review__date" dateTime="2015-11-18">{date}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{rating}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Reviews;
