import { Link } from 'react-router-dom';

import './hero.scss';
import banner from '../../assets/img/banner-1.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Welcome to Little Lemon, where big flavors meet small delights.
            Discover our culinary artistry with a zestful twist. From refreshing
            dishes to tangy desserts, our citrus-inspired creations will
            brighten your day.
          </p>
          <Link className="button-primary" to={'/reservation'}>
            Reserve a table
          </Link>
        </div>
        <img className="hero-image" src={banner} alt="Restaurant banner" />
      </div>
    </section>
  );
};

export default Hero;
