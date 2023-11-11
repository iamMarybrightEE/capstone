import { Link } from 'react-router-dom';
import ratatouilleImage from './img/ratatouille.jpg';
import spaghettiImage from './img/spaghetti.jpg';
import lemonDessertImage from './img/lemon-dessert.jpg';
import './specials-section.scss';
import Card from '../Card';

const meals = [
  {
    name: 'Spaghetti',
    image: spaghettiImage,
    price: '$12.99',
    description: `Experience pure Italian comfort with our Spaghetti, Al dente pasta embraced in rich, savory sauce.`,
  },
  {
    name: 'Ratatouille',
    image: ratatouilleImage,
    price: '$5.99',
    description: `Savor the rustic charm of Ratatouille, A medley of vibrant vegetables in a harmonious French classic.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$4.99',
    description: `"Indulge in our zesty Lemon Delight, a citrusy symphony of flavors in a delectable dessert creation.`,
  },
];

const SpecialsSection = () => {
  return (
    <section className="container grid specials">
      <div className="specials-header">
        <h2>Our Specials Dish!</h2>
        <Link className="button-primary" to="/order">
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => (
        <Card key={index} item={meal} />
      ))}
    </section>
  );
};

export default SpecialsSection;
