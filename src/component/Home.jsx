import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css'
const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "An absolutely magical experience! The hot air balloon ride in Cappadocia was unforgettable.",
      name: "Sarah Johnson",
      location: "New York, USA",
      stars: 5
    },
    {
      id: 2,
      text: "The guides were incredibly knowledgeable and the food was amazing. Highly recommend!",
      name: "Marco Rodriguez",
      location: "Madrid, Spain",
      stars: 5
    },
    {
      id: 3,
      text: "Istanbul's history came alive through our guide's stories. The Grand Bazaar was incredible!",
      name: "Emma Thompson",
      location: "London, UK",
      stars: 5
    },
    {
      id: 4,
      text: "Pamukkale's thermal pools were so relaxing. The whole trip exceeded our expectations!",
      name: "Hans Mueller",
      location: "Berlin, Germany",
      stars: 5
    }
  ];

  const destinations = [
    {
      id: 1,
      name: "Istanbul",
      description: "Where East meets West",
      image: "Istanbul.jfif"
    },
    {
      id: 2,
      name: "Cappadocia",
      description: "Land of fairy chimneys",
      image: "Cappadocia.jpg"
    },
    {
      id: 3,
      name: "Pamukkale",
      description: "Cotton Castle terraces",
      image: "Pamukkale.jpg"
    },
    {
      id: 4,
      name: "Antalya",
      description: "Turkish Riviera",
      image: "Antalya.jfif"
    }
  ];

  const features = [
    {
      id: 1,
      icon: "fas fa-map-marked-alt",
      title: "Expert Guides",
      description: "Local experts who know every hidden gem and story"
    },
    {
      id: 2,
      icon: "fas fa-heart",
      title: "Authentic Experiences",
      description: "Immerse yourself in genuine Turkish culture and traditions"
    },
    {
      id: 3,
      icon: "fas fa-shield-alt",
      title: "Safe & Secure",
      description: "Your safety and comfort are our top priorities"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "500+", label: "Tours Completed" },
    { number: "15", label: "Years Experience" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <i key={index} className="fas fa-star" />
    ));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section parallax">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container text-center text-white">
            <h1 className="hero-title animate-fade-in text-shadow">
              Discover the Magic of Turkey
            </h1>
            <p className="hero-subtitle animate-fade-in-delay">
              Experience ancient history, stunning landscapes, and rich culture
            </p>
            <Link to="/tours" className="btn btn-primary btn-md animate-bounce glow">
              Book Your Adventure
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Featured Destinations</h2>
            <p className="section-subtitle">Explore Turkey's most breathtaking locations</p>
          </div>
          <div className="row g-4">
            {destinations.map(destination => (
              <div key={destination.id} className="col-md-6 col-lg-3">
                <div className="destination-card">
                  <div className="card-image">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="img-fluid"
                    />
                    <div className="card-overlay">
                      <h4>{destination.name}</h4>
                      <p>{destination.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/destinations" className="btn btn-primary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Experience Turkey</h2>
            <p className="section-subtitle">Watch our travelers explore the wonders of Turkey</p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/5K3Jdux_DDg?si=c5XB-m26NV4iLSgm"
                  title="Turkey Travel Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-3">Turkey Awaits You</h3>
              <p className="mb-4">
                From the bustling streets of Istanbul to the fairy chimneys of Cappadocia, 
                Turkey offers experiences that will stay with you forever. Watch real travelers 
                share their incredible journeys.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  UNESCO World Heritage Sites
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  Rich Cultural Heritage
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  Stunning Natural Landscapes
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  Delicious Turkish Cuisine
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-5 stats-section">
        <div className="container">
          <div className="row text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="stat-item">
                  <h2 className="display-4 fw-bold mb-2">{stat.number}</h2>
                  <p className="h5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose Turkify Travels?</h2>
          </div>
          <div className="row g-4">
            {features.map(feature => (
              <div key={feature.id} className="col-md-4">
                <div className="feature-card text-center">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Preview */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Popular Tours</h2>
            <p className="section-subtitle">Our most loved travel experiences</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="tour-preview-card">
                <img 
                  src="Istanbul.avif" 
                  alt="Istanbul Tour" 
                  className="img-fluid rounded"
                />
                <div className="p-3">
                  <h5>Istanbul Classic Tour</h5>
                  <p className="text-muted">3 Days • From $299</p>
                  <div className="stars mb-2">
                    {renderStars()}
                    <span className="ms-2">(124 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tour-preview-card">
                <img 
                  src="Cappadocia_Adventure.avif" 
                  alt="Cappadocia Tour" 
                  className="img-fluid rounded"
                />
                <div className="p-3">
                  <h5>Cappadocia Adventure</h5>
                  <p className="text-muted">2 Days • From $449</p>
                  <div className="stars mb-2">
                    {renderStars()}
                    <span className="ms-2">(89 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tour-preview-card">
                <img 
                  src="Beautiful_Turkey.avif" 
                  alt="Turkey Grand Tour" 
                  className="img-fluid rounded"
                />
                <div className="p-3">
                  <h5>Turkey Grand Tour</h5>
                  <p className="text-muted">7 Days • From $1,299</p>
                  <div className="stars mb-2">
                    {renderStars()}
                    <span className="ms-2">(156 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/tours" className="btn btn-primary">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What Our Travelers Say</h2>
          </div>
          <div className="testimonial-carousel">
            <div className="testimonial-container position-relative">
              <div className="testimonial-card text-center">
                <div className="stars mb-3">
                  {renderStars()}
                </div>
                <p className="testimonial-text fs-5 mb-4">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h5 className="mb-1">{testimonials[currentTestimonial].name}</h5>
                <small className="text-muted">{testimonials[currentTestimonial].location}</small>
              </div>
              
              {/* Navigation buttons */}
              <button 
                className="carousel-control-prev position-absolute top-50 start-0 translate-middle-y"
                type="button"
                onClick={prevTestimonial}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                className="carousel-control-next position-absolute top-50 end-0 translate-middle-y"
                type="button"
                onClick={nextTestimonial}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            
            {/* Dots indicator */}
            <div className="text-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`btn btn-sm mx-1 carousel-indicator ${index === currentTestimonial ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;