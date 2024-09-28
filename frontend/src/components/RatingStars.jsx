
import PropTypes from 'prop-types';

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`ri-star${i <= rating ? '-fill' : '-line'}`}></span>
    );
  }

  return <div className='product__rating'>{stars}</div>;
};

// PropTypes validation
RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,  // rating should be a number and is required
};

export default RatingStars;
