import {useState, FormEvent, ChangeEvent,useRef} from 'react';
import {sendCommentsAction} from '../../store/api-actions';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';

function AddReviewForm(): JSX.Element {
  const [userReview, setReview] = useState([4,'...здесь еще никто ничего не писал.']);
  const ratings: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const ratingRef = useRef<HTMLInputElement | null>(null);
  const commentsRef = useRef<HTMLTextAreaElement | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (commentsRef.current !== null && ratingRef.current !== null) {
      dispatch(sendCommentsAction({
        idFilm: String(id),
        comment: commentsRef.current.value,
        rating: Number(userReview[0])
      }));
      setReview([4,'...здесь еще никто ничего не писал.' ]);
      navigate(`/films/${String(id)}`);
    }
    //console.log((commentsRef.current.value);
  };

  return (
    <form action="#" className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {
            ratings.map((rating) => {
              const check = (Number(rating) === userReview[0]);
              return (
                <>
                  <input
                    ref={ratingRef}
                    onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                      const value = target.value;
                      setReview([Number(value), userReview[1]]);
                    }}
                    className="rating__input" id={`star-${rating}`} type="radio" name="rating"
                    value={rating} checked={check}
                  />
                  <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                </>
              );
            })
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea ref={commentsRef} className="add-review__textarea" name="review-text" id="review-text"
          placeholder="Review text"
          value = {userReview[1]}
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
            const value = target.value;
            setReview([userReview[0],value]);
          }}

        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;

