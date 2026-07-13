import { useState } from 'react';
import '../css/destinations.css';

const Destinations = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const destinations = [
    {
      id: 1,
      name: 'Istanbul',
      category: ['historical', 'cultural'],
      image: 'Istanbul.jfif',
      badge: 'Historical',
      location: 'Marmara Region',
      description: 'Where Europe meets Asia, Istanbul is a city of contrasts with magnificent mosques, bustling bazaars, and rich Byzantine history.',
      features: [
        { icon: 'fas fa-mosque', text: 'Hagia Sophia' },
        { icon: 'fas fa-shopping-bag', text: 'Grand Bazaar' },
        { icon: 'fas fa-water', text: 'Bosphorus' }
      ],
      rating: 4.9,
      stars: 5
    },
    {
      id: 2,
      name: 'Cappadocia',
      category: ['natural', 'cultural'],
      image: 'Cappadocia.jpg',
      badge: 'Natural Wonder',
      location: 'Central Anatolia',
      description: 'Famous for its fairy chimneys, underground cities, and magical hot air balloon rides over surreal landscapes.',
      features: [
        { icon: 'fas fa-mountain', text: 'Fairy Chimneys' },
        { icon: 'fas fa-parachute-box', text: 'Hot Air Balloons' },
        { icon: 'fas fa-dungeon', text: 'Underground Cities' }
      ],
      rating: 4.8,
      stars: 5
    },
    {
      id: 3,
      name: 'Pamukkale',
      category: ['natural'],
      image: 'Pamukkale.jpg',
      badge: 'UNESCO Site',
      location: 'Denizli Province',
      description: 'The "Cotton Castle" with its white travertine terraces and thermal pools, alongside ancient Hierapolis ruins.',
      features: [
        { icon: 'fas fa-water', text: 'Thermal Pools' },
        { icon: 'fas fa-columns', text: 'Ancient Ruins' },
        { icon: 'fas fa-spa', text: 'Natural Spa' }
      ],
      rating: 4.7,
      stars: 5
    },
    {
      id: 4,
      name: 'Antalya',
      category: ['coastal'],
      image: 'Antalya.jfif',
      badge: 'Turkish Rivers',
      location: 'Mediterranean Coast',
      description: 'Turkey\'s tourism capital with pristine beaches, ancient ruins, and a charming old town overlooking the Mediterranean.',
      features: [
        { icon: 'fas fa-umbrella-beach', text: 'Beautiful Beaches' },
        { icon: 'fas fa-city', text: 'Old Town' },
        { icon: 'fas fa-sun', text: 'Year-round Sun' }
      ],
      rating: 4.6,
      stars: 5
    },
    {
      id: 5,
      name: 'Ephesus',
      category: ['historical'],
      image: 'Ephesus.avif',
      badge: 'Ancient City',
      location: 'Izmir Province',
      description: 'One of the best-preserved ancient cities in the world, featuring the magnificent Library of Celsus and Great Theatre.',
      features: [
        { icon: 'fas fa-book', text: 'Library of Celsus' },
        { icon: 'fas fa-theater-masks', text: 'Great Theatre' },
        { icon: 'fas fa-columns', text: 'Roman Ruins' }
      ],
      rating: 4.8,
      stars: 5
    },
    {
      id: 6,
      name: 'Bodrum',
      category: ['coastal'],
      image: 'Bodrum.avif',
      badge: 'Aegean Paradise',
      location: 'Muğla Province',
      description: 'A glamorous coastal town known for its vibrant nightlife, luxury marinas, and the ancient Mausoleum of Halicarnassus.',
      features: [
        { icon: 'fas fa-anchor', text: 'Beautiful Marines' },
        { icon: 'fas fa-cocktail', text: 'Night life' },
        { icon: 'fas fa-fort-awesome', text: 'Castle' }
      ],
      rating: 4.5,
      stars: 4
    }
  ];

  const filters = [
    { id: 'all', icon: 'fas fa-globe', label: 'All Destinations' },
    { id: 'historical', icon: 'fas fa-landmark', label: 'Historical' },
    { id: 'natural', icon: 'fas fa-mountain', label: 'Natural' },
    { id: 'coastal', icon: 'fas fa-umbrella-beach', label: 'Coastal' },
    { id: 'cultural', icon: 'fas fa-mosque', label: 'Cultural' }
  ];

  const filteredDestinations = selectedFilter === 'all' 
    ? destinations 
    : destinations.filter(destination => destination.category.includes(selectedFilter));

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={index < count ? 'fas fa-star' : 'far fa-star'}
      />
    ));
  };

  return (
    <div className="destinations-section">
      {/* Page Header */}
      <section className="dtpage-header parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="dtpage-title animate-slide-left text-shadow">
                Discover Turkey's Wonders
              </h1>
              <p className="dtpage-subtitle animate-fade-in-delay">
                From ancient cities to natural marvels, explore the diverse beauty of Turkey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Filter Buttons */}
              <div className="filter-buttons text-center mb-4">
                {filters.map(filter => (
                  <label 
                    key={filter.id}
                    className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(filter.id)}
                  >
                    <i className={filter.icon}></i> {filter.label}
                  </label>
                ))}
              </div>
              
              {/* Destinations Grid */}
              <div className="row g-4 mt-4">
                {filteredDestinations.map(destination => (
                  <div key={destination.id} className="col-lg-4 col-md-6 destination-item">
                    <div className="destination-card-detailed">
                      <div className="card-image">
                        <img 
                          src={destination.image} 
                          alt={destination.name} 
                          className="img-fluid"
                        />
                        <div className="card-badge">{destination.badge}</div>
                      </div>
                      <div className="card-content">
                        <h3>{destination.name}</h3>
                        <p className="location">
                          <i className="fas fa-map-marker-alt"></i> {destination.location}
                        </p>
                        <p className="description">{destination.description}</p>
                        <div className="card-features">
                          {destination.features.map((feature, index) => (
                            <span key={index}>
                              <i className={feature.icon}></i> {feature.text}
                            </span>
                          ))}
                        </div>
                        <div className="card-footer">
                          <div className="rating">
                            {renderStars(destination.stars)}
                            <span>{destination.rating}</span>
                          </div>
                          <a href="/tours" className="btn btn-primary btn-sm">
                            View Tours
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2>Ready to Explore Turkey?</h2>
          <p className="lead">Let us create the perfect itinerary for your Turkish adventure</p>
          <a href="/contact-us" className="btn btn-light btn-sm">Plan Your Trip</a>
        </div>
      </section>
    </div>
  );
};

export default Destinations;