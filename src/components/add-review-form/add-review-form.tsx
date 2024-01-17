import {useState, FormEvent, ChangeEvent} from 'react';

function AddReviewForm(): JSX.Element {
  const [userReview, setReview] = useState([4,'...здесь еще никто ничего не писал.']);
  const ratings: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <form action="#" className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setReview([userReview[0], userReview[1]]);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {
            ratings.map((rating) => {
              const check = (Number(rating) === userReview[0]);
              return (
                <>
                  <input
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
        <textarea className="add-review__textarea" name="review-text" id="review-text"
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

