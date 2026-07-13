import { useState } from 'react';
import '../css/gallery.css';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'destinations',
      image: 'Istanbul.jfif',
      alt: 'Hagia Sophia, Istanbul',
      title: 'Hagia Sophia',
      location: 'Istanbul, Turkey'
    },
    {
      id: 2,
      category: 'nature',
      image: 'Cappadocia.jpg',
      alt: 'Cappadocia Balloons',
      title: 'Hot Air Balloons',
      location: 'Cappadocia, Turkey'
    },
    {
      id: 3,
      category: 'destinations',
      image: 'Pamukkale.jpg',
      alt: 'Pamukkale Terraces',
      title: 'Cotton Castle',
      location: 'Pamukkale, Turkey'
    },
    {
      id: 4,
      category: 'food',
      image: 'Meze.avif',
      alt: 'Turkish Meze',
      title: 'Turkish Meze',
      location: 'Traditional Appetizers'
    },
    {
      id: 5,
      category: 'culture',
      image: 'Ephesus.avif',
      alt: 'Ephesus Library',
      title: 'Library of Celsus',
      location: 'Ephesus, Turkey'
    },
    {
      id: 6,
      category: 'food',
      image: 'Baklava.avif',
      alt: 'Turkish Baklava',
      title: 'Fresh Baklava',
      location: 'Traditional Turkish Dessert'
    },
    {
      id: 7,
      category: 'nature',
      image: 'Antalya.jfif',
      alt: 'Turkish Coast',
      title: 'Turquoise Coast',
      location: 'Antalya, Turkey'
    },
    {
      id: 8,
      category: 'food',
      image: 'Kebab.avif',
      alt: 'Turkish Kebab',
      title: 'Grilled Kebab',
      location: 'Traditional Turkish Main Course'
    },
    {
      id: 9,
      category: 'culture',
      image: 'Istanbul2.avif',
      alt: 'Blue Mosque',
      title: 'Blue Mosque',
      location: 'Istanbul, Turkey'
    },
    {
      id: 10,
      category: 'destinations',
      image: 'Beautiful_Turkey.avif',
      alt: 'Bodrum Marina',
      title: 'Bodrum Marina',
      location: 'Aegean Coast, Turkey'
    },
    {
      id: 11,
      category: 'nature',
      image: 'Cappadocia_Adventure.avif',
      alt: 'Fairy Chimneys',
      title: 'Fairy Chimneys',
      location: 'Cappadocia, Turkey'
    },
    {
      id: 12,
      category: 'food',
      image: 'Doner.jfif',
      alt: 'Döner Kebab',
      title: 'Döner Kebab',
      location: 'Popular Turkish Street Food'
    },
    {
      id: 13,
      category: 'food',
      image: 'Food.jfif',
      alt: 'Turkish Food Spread',
      title: 'Turkish Feast',
      location: 'Variety of Turkish Dishes'
    },
    {
      id: 14,
      category: 'food',
      image: 'Cay.jfif',
      alt: 'Turkish Tea',
      title: 'Turkish Tea (Çay)',
      location: 'Traditional Turkish Beverage'
    }
  ];

  const filters = [
    { id: 'all', icon: 'fas fa-images', label: 'All Photos' },
    { id: 'destinations', icon: 'fas fa-map-marker-alt', label: 'Destinations' },
    { id: 'culture', icon: 'fas fa-mosque', label: 'Culture' },
    { id: 'food', icon: 'fas fa-utensils', label: 'Food' },
    { id: 'nature', icon: 'fas fa-mountain', label: 'Nature' }
  ];

  const stats = [
    { number: '500+', label: 'Photos' },
    { number: '50+', label: 'Destinations' },
    { number: '1000+', label: 'Happy Travelers' },
    { number: '5', label: 'Years Experience' }
  ];

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="gallery-section">
      {/* Page Header */}
      <section className="gpage-header parallax">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="page-title animate-slide-left text-shadow">
                Photo Gallery
              </h1>
              <p className="page-subtitle animate-fade-in-delay">
                Discover Turkey through stunning photography and traveler memories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Filter Buttons */}
              <div className="gallery-filters text-center mb-4">
                {filters.map(filter => (
                  <label 
                    key={filter.id}
                    className={`gallery-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(filter.id)}
                  >
                    <i className={filter.icon}></i> {filter.label}
                  </label>
                ))}
              </div>
              
              {/* Photo Gallery */}
              <div className="gallery-grid mt-4">
                {filteredItems.map(item => (
                  <div key={item.id} className="gallery-item">
                    <div className="gallery-card">
                      <img 
                        src={item.image} 
                        alt={item.alt} 
                        className="img-fluid"
                      />
                      <div className="gallery-overlay">
                        <div className="gallery-info">
                          <h5>{item.title}</h5>
                          <p>{item.location}</p>
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

      {/* Photo Stats */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3">
                <div className="gstat-card">
                  <div className="gstat-number">{stat.number}</div>
                  <div className="gstat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;