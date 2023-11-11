import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ReservationCompleted = () => {
  return (
    <div className="container reservation-completed">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
      <Link to="/">
        <button type="button" className="button-primary">
          {' '}
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ReservationCompleted;
