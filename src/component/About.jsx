import { Link } from "react-router-dom";
import '../css/about.css';

const About = () => {
  return (
    <>
      <section className="apage-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="page-title animate-slide-left text-shadow">About Turkify Travels</h1>
              <p className="page-subtitle animate-fade-in-delay">Your trusted partner in discovering the magic of Turkey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="story-image">
                <img
                  src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600"
                  alt="Our Story"
                  className="img-fluid rounded"
                />
                <div className="story-badge">
                  <div className="badge-content">
                    <span className="badge-number">5+</span>
                    <span className="badge-text">Years</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="story-content">
                <h2 className="section-title">Our Story</h2>
                <p className="lead">Founded in 2019 by a group of passionate travel enthusiasts, Turkify Travels was born from a deep love for Turkey's rich culture, stunning landscapes, and warm hospitality.</p>
                <p>What started as a small local tour company has grown into a trusted travel partner, helping thousands of visitors discover the authentic beauty of Turkey. We believe that travel is not just about seeing new places, but about creating meaningful connections with local cultures and communities.</p>
                <p>Our team of experienced guides and travel experts are all locals who know Turkey inside and out. We're committed to providing authentic, sustainable, and unforgettable travel experiences that showcase the best of our beautiful country.</p>

                <div className="story-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <span>1000+ Happy Travelers</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>50+ Destinations</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-award"></i>
                    <span>Award-Winning Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle">What drives us every day</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h4>Authentic Experiences</h4>
                <p>We create genuine connections between travelers and Turkish culture, going beyond typical tourist attractions to showcase real local life.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h4>Sustainable Tourism</h4>
                <p>We're committed to responsible travel practices that benefit local communities and preserve Turkey's natural and cultural heritage.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h4>Excellence in Service</h4>
                <p>Every detail matters to us. From planning to execution, we strive for perfection in every aspect of your Turkish adventure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2>Ready to Start Your Turkish Adventure?</h2>
          <p className="lead">Join thousands of satisfied travelers who have discovered Turkey with us</p>
          <div className="cta-buttons">
            <Link to="/tours" className="btn btn-light btn-sm me-3">
              Browse Tours
            </Link>
            <Link to="/contact-us" className="btn btn-dark btn-outline-light btn-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
