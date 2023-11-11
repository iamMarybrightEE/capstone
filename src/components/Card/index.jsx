import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ item }) => {
  return (
    <article className="card">
      <div className="card-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-header">
        <h3>{item.name}</h3>
        <span>{item.price}</span>
      </div>
      <div className="card-body-footer">
        <p>{item.description}</p>
        <Link to="/order">
          Order Now <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </article>
  );
};

export default Card;
