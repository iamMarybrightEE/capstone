import chef2 from '../../assets/img/chef.jpg';
import './our-story.scss';

const OurStory = () => {
  return (
    <section className="container our-story">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <div className="our-story-body">
          <p>
            {`Welcome to Little Lemon, a hidden gem in the heart of Citrusville. With a decade-long legacy, our restaurant has delighted both locals and visitors alike. Step inside our cozy lemon-themed ambiance, where you'll experience a burst of freshness in every dish. From tangy lemon-infused appetizers to mouthwatering desserts, our skilled chefs craft each menu item with care, using locally sourced, seasonal ingredients. At Little Lemon, it's not just a meal; it's a culinary journey that leaves lasting memories. Come savor the magic of Little Lemon and let our citrus-inspired delights brighten your day. We can't wait to serve you with our zestful creations!`}
          </p>
          <img src={chef2} alt="Chefs Image" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
