import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './testimonials.scss';
import customer1Image from './img/jean.jpg';
import customer2Image from './img/john.jpg';
import customer3Image from './img/cathy.jpg';
import customer4Image from './img/paulo.jpg';

const ratingLevels = { 0.5: faStarHalfStroke, 1: faStar };

const TestimonialItem = ({ customer }) => {
  return (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.fullName} />
      <h4>{customer.fullName}</h4>
      <span>
        {customer.rating.map((ratingPoint, index) => (
          <FontAwesomeIcon
            key={index}
            icon={ratingLevels[ratingPoint]}
            size="xs"
          />
        ))}
      </span>
      <blockquote>
        <p>{`"${customer.says}"`}</p>
      </blockquote>
    </article>
  );
};

const customers = [
  {
    fullName: 'Jean Miller',
    image: customer1Image,
    rating: [1, 1, 1, 1, 1],
    says: `The food is simply delicious. I love the flavors and attention to detail in every dish.`,
  },
  {
    fullName: 'John Thompson',
    image: customer2Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I've had some great meals here. The chef knows how to make dishes that leave a lasting impression.`,
  },
  {
    fullName: 'Cathy Anderson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 1],
    says: `The menu offers a nice variety, and everything I've tried has been flavorful and enjoyable.`,
  },
  {
    fullName: 'Paulo Santos',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `I'm a fan of this place. The food is consistently good, and it's a reliable spot for a satisfying meal.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialItem key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
