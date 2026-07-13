import { useState } from 'react';
import BookingModal from './BookingModal';
import '../css/tours.css';

const Tours = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const categories = [
    {
      id: 1,
      icon: 'fas fa-mosque',
      title: 'Cultural Tours',
      description: 'Explore Turkey\'s rich history and heritage',
      tourCount: '8 Tours'
    },
    {
      id: 2,
      icon: 'fas fa-mountain',
      title: 'Adventure Tours',
      description: 'Thrilling experiences in stunning landscapes',
      tourCount: '6 Tours'
    },
    {
      id: 3,
      icon: 'fas fa-umbrella-beach',
      title: 'Beach & Relaxation',
      description: 'Unwind on Turkey\'s beautiful coastlines',
      tourCount: '5 Tours'
    }
  ];

  const tours = [
    {
      id: 'istanbul-classic',
      name: 'Istanbul Classic Tour',
      image: 'Istanbul.jfif',
      badge: 'Best Seller',
      duration: '3 Days',
      reviews: 124,
      description: 'Discover the magic of Istanbul with visits to Hagia Sophia, Blue Mosque, Grand Bazaar, and Bosphorus cruise.',
      highlights: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar', 'Bosphorus Cruise'],
      price: 299
    },
    {
      id: 'cappadocia-adventure',
      name: 'Cappadocia Adventure',
      image: 'Cappadocia_Adventure.avif',
      badge: 'Popular',
      duration: '2 Days',
      reviews: 89,
      description: 'Experience the fairy tale landscape with hot air balloon rides, underground cities, and cave hotels.',
      highlights: ['Hot Air Balloon', 'Underground City', 'Cave Hotel', 'Sunset Valley'],
      price: 449
    },
    {
      id: 'turkey-grand',
      name: 'Turkey Grand Tour',
      image: 'Beautiful_Turkey.avif',
      badge: 'Premium',
      duration: '7 Days',
      reviews: 156,
      description: 'Complete Turkey experience covering Istanbul, Cappadocia, Pamukkale, and Ephesus with luxury accommodations.',
      highlights: ['4 Destinations', 'Luxury Hotels', 'Private Guide', 'All Meals'],
      price: 1299
    },
    {
      id: 'riviera-escape',
      name: 'Turkish Riviera Escape',
      image: 'Antalya.jfif',
      badge: 'Summer Special',
      duration: '5 Days',
      reviews: 67,
      description: 'Relax on pristine beaches, explore ancient ruins, and enjoy Mediterranean cuisine along Turkey\'s stunning coast.',
      highlights: ['Beach Resort', 'Ancient Ruins', 'Boat Trip', 'Local Cuisine'],
      price: 699
    },
    {
      id: 'cultural-heritage',
      name: 'Cultural Heritage Tour',
      image: 'Ephesus.avif',
      badge: 'Educational',
      duration: '4 Days',
      reviews: 92,
      description: 'Deep dive into Turkey\'s rich history visiting Ephesus, Troy, and other UNESCO World Heritage sites.',
      highlights: ['Ephesus', 'Troy', 'Expert Guide', 'Museums'],
      price: 549
    },
    {
      id: 'adventure-nature',
      name: 'Adventure & Nature',
      image: 'Istanbul2.avif',
      badge: 'Adventure',
      duration: '6 Days',
      reviews: 73,
      description: 'For adventure seekers: hiking, rafting, paragliding, and exploring Turkey\'s natural wonders.',
      highlights: ['Hiking', 'Rafting', 'Paragliding', 'National Parks'],
      price: 799
    }
  ];

  const features = [
    {
      id: 1,
      icon: 'fas fa-user-tie',
      title: 'Expert Guides',
      description: 'Licensed local guides with deep knowledge'
    },
    {
      id: 2,
      icon: 'fas fa-bus',
      title: 'Comfortable Transport',
      description: 'Modern, air-conditioned vehicles'
    },
    {
      id: 3,
      icon: 'fas fa-utensils',
      title: 'Authentic Cuisine',
      description: 'Traditional Turkish meals included'
    },
    {
      id: 4,
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock assistance for you'
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <i key={index} className="fas fa-star" />
    ));
  };

  const handleBookTour = (tourId) => {
    const tour = tours.find(t => t.id === tourId);
    setSelectedTour(tour);
    setShowBookingModal(true);
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
    setSelectedTour(null);
  };

  return (
    <div className="tours-page">
      {/* Page Header */}
      <section className="tpage-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="page-title animate-slide-left text-shadow">Turkey Tour Packages</h1>
              <p className="page-subtitle animate-fade-in-delay">
                Carefully crafted experiences for every type of traveler
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Choose Your Adventure</h2>
            <p className="section-subtitle">From cultural immersion to natural wonders</p>
          </div>
          <div className="row g-4">
            {categories.map(category => (
              <div key={category.id} className="col-md-4">
                <div className="category-card">
                  <div className="category-icon">
                    <i className={category.icon}></i>
                  </div>
                  <h4>{category.title}</h4>
                  <p>{category.description}</p>
                  <span className="tour-count">{category.tourCount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turkish Places Animation */}
      <section className="turkish-places-animation">
        <div className="places-scroll-container">
          <div className="place-item">Istanbul</div>
          <div className="place-item">Pamukkale</div>
          <div className="place-item">Cappadocia</div>
          <div className="place-item">Ephesus</div>
          <div className="place-item">Antalya</div>
          <div className="place-item">Bodrum</div>
          <div className="place-item">Trabzon</div>
          <div className="place-item">Ankara</div>
          <div className="place-item">Gallipoli</div>
          <div className="place-item">Olympos</div>
          <div className="place-item">Konya</div>
          <div className="place-item">Hierapolis</div>
          <div className="place-item">Troy</div>
          <div className="place-item">Nemrut</div>
          <div className="place-item">Kas</div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Featured Tour Packages</h2>
          </div>
          <div className="row g-4">
            {tours.map(tour => (
              <div key={tour.id} className="col-lg-4 col-md-6">
                <div className="tour-card">
                  <div className="tour-image">
                    <img src={tour.image} alt={tour.name} className="img-fluid" />
                    <div className="tour-badge">{tour.badge}</div>
                    <div className="tour-duration">{tour.duration}</div>
                  </div>
                  <div className="tour-content">
                    <h3>{tour.name}</h3>
                    <div className="tour-rating">
                      <div className="stars">
                        {renderStars()}
                      </div>
                      <span>({tour.reviews} reviews)</span>
                    </div>
                    <p className="tour-description">{tour.description}</p>
                    <div className="tour-highlights">
                      {tour.highlights.map((highlight, index) => (
                        <span key={index}>
                          <i className="fas fa-check"></i> {highlight}
                        </span>
                      ))}
                    </div>
                    <div className="tour-footer">
                      <div className="tour-price">
                        <span className="price">${tour.price}</span>
                        <span className="per-person">per person</span>
                      </div>
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => handleBookTour(tour.id)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tours */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose Our Tours?</h2>
          </div>
          <div className="row g-4">
            {features.map(feature => (
              <div key={feature.id} className="col-md-3">
                <div className="feature-item text-center">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal}
        onClose={handleCloseModal}
        selectedTour={selectedTour}
      />
    </div>
  );
};

export default Tours;