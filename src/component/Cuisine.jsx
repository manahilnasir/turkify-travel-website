import '../css/cuisine.css';

const Cuisine = () => {

  const dishes = [
    {
      id: 1,
      name: 'Turkish Kebab',
      category: 'main',
      image: 'Keab.avif',
      badge: 'Signature',
      description: 'Perfectly grilled meat served with rice, vegetables, and traditional bread. A true Turkish classic.',
      features: [
        { icon: 'fas fa-fire', text: 'Grilled' },
        { icon: 'fas fa-leaf', text: 'Halal' },
        { icon: 'fas fa-clock', text: '20 min' }
      ],
      rating: 4.3,
      stars: 4
    },
    {
      id: 2,
      name: 'Baklava',
      category: 'dessert',
      image: 'Baklava.avif',
      badge: 'Sweet',
      description: 'Layers of crispy phyllo pastry filled with nuts and sweetened with honey syrup. A unique turkish sweet dish',
      features: [
        { icon: 'fas fa-cookie-bite', text: 'Pastry' },
        { icon: 'fas fa-seedling', text: 'Nuts' },
        { icon: 'fas fa-heart', text: 'Traditional' }
      ],
      rating: 4.8,
      stars: 5
    },
    {
      id: 3,
      name: 'Turkish Tea (Çay)',
      category: 'drink',
      image: 'Cay.jfif',
      badge: 'Cultural',
      description: 'Strong black tea served in traditional tulip-shaped glasses, a symbol of Turkish hospitality.',
      features: [
        { icon: 'fas fa-mug-hot', text: 'Hot' },
        { icon: 'fas fa-leaf', text: 'Black Tea' },
        { icon: 'fas fa-users', text: 'Social' }
      ],
      rating: 4.7,
      stars: 5
    },
    {
      id: 4,
      name: 'Turkish Meze',
      category: 'appetizer',
      image: 'Meze.avif',
      badge: 'Variety',
      description: 'A selection of small dishes including hummus, dolma, and various dips served as appetizers.',
      features: [
        { icon: 'fas fa-utensils', text: 'Appetizer' },
        { icon: 'fas fa-carrot', text: 'Vegetarian' },
        { icon: 'fas fa-share-alt', text: 'Sharing' }
      ],
      rating: 4,
      stars: 4
    },
    {
      id: 5,
      name: 'Döner Kebab',
      category: 'main',
      image: 'Keab.avif',
      badge: 'Street Food',
      description: 'Slow-cooked rotating meat served in pita bread with fresh vegetables and sauce. Famous in other countries too',
      features: [
        { icon: 'fas fa-bread-slice', text: 'Pita' },
        { icon: 'fas fa-running', text: 'Fast' },
        { icon: 'fas fa-road', text: 'Street Food' }
      ],
      rating: 4.8,
      stars: 5
    },
    {
      id: 6,
      name: 'Turkish Coffee',
      category: 'drink',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400',
      badge: 'UNESCO',
      description: 'UNESCO-recognized traditional coffee preparation method, served with Turkish delight.',
      features: [
        { icon: 'fas fa-coffee', text: 'Strong' },
        { icon: 'fas fa-award', text: 'UNESCO' },
        { icon: 'fas fa-history', text: 'Traditional' }
      ],
      rating: 4.9,
      stars: 5
    }
  ];

  const experiences = [
    {
      id: 1,
      icon: 'fas fa-walking',
      title: 'Food Walking Tours',
      description: 'Explore local markets and street food with expert guides',
      features: [
        '4-hour guided tour',
        '10+ food tastings',
        'Local market visits',
        'Cultural insights'
      ],
      price: 'From $45/person'
    },
    {
      id: 2,
      icon: 'fas fa-utensils',
      title: 'Cooking Classes',
      description: 'Learn to prepare authentic Turkish dishes from local chefs',
      features: [
        '3-hour hands-on class',
        '5 traditional recipes',
        'Professional chef instructor',
        'Recipe booklet included'
      ],
      price: 'From $65/person'
    },
    {
      id: 3,
      icon: 'fas fa-home',
      title: 'Home Dining',
      description: 'Enjoy authentic meals with Turkish families in their homes',
      features: [
        '2-3 hour experience',
        'Traditional family recipes',
        'Cultural exchange',
        'Authentic atmosphere'
      ],
      price: 'From $55/person'
    }
  ];

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i key={index} className={index < count ? 'fas fa-star' : 'far fa-star'} />
    ));
  };

  return (
    <div className="cuisine-page">

      {/* Page Header */}
      <section className="cpage-header parallax">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="page-title animate-slide-left text-shadow">Turkish Cuisine</h1>
              <p className="page-subtitle animate-fade-in-delay">
                A culinary journey through flavors, traditions, and authentic Turkish dishes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Introduction */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">A Rich Culinary Heritage</h2>
              <p className="lead">
                Turkish cuisine is a harmonious blend of Central Asian, Middle Eastern, and Balkan influences, 
                creating one of the world's most diverse and flavorful food traditions.
              </p>
              <p>
                From bustling street food markets to refined Ottoman palace cuisine, Turkey offers an incredible gastronomic adventure.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80" 
                alt="Turkish Cuisine Spread" 
                className="img-fluid rounded glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Must-Try Turkish Dishes</h2>
          </div>

          <div className="row g-4 mt-4">
            {dishes.map(dish => (
              <div key={dish.id} className="col-lg-4 col-md-6 dish-item">
                <div className="dish-card">
                  <img src={dish.image} alt={dish.name} className="img-fluid" />
                  <div className="dish-content">
                    <h4>{dish.name}</h4>
                    <p>{dish.description}</p>
                    <div className="dish-features">
                      {dish.features.map((feature, index) => (
                        <span key={index}><i className={feature.icon}></i> {feature.text}</span>
                      ))}
                    </div>
                    <div className="dish-rating">
                      <div className="stars">{renderStars(dish.stars)}</div>
                      <span>{dish.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Experiences */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Cuisine Packages</h2>
            </div>
          </div>
        <div className="container">
          <div className="row g-4">
            {experiences.map(exp => (
              <div key={exp.id} className="col-md-4">
                <div className="experience-card">
                  <div className="experience-icon"><i className={exp.icon}></i></div>
                  <h4>{exp.title}</h4>
                  <p>{exp.description}</p>
                  <ul>
                    {exp.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <div className="experience-price">{exp.price}</div>
                  <a href="/tours" className="btn btn-primary btn-sm">Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Cuisine;
