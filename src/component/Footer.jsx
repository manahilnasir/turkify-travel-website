import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="footer-brand">
                <Link className="navbar-brand" to="/">
            <i className="fas fa-moon navbar-brand-icon"></i>
            Turkify Travels
          </Link>
              </h5>
              <p>
                Discover the magic of Turkey with authentic experiences and expert guidance.
              </p>
              <div className="social-links">
                <a href="#" className="me-3">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/destinations" className="text-white text-decoration-none">
                    Destinations
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/tours" className="text-white text-decoration-none">
                    Tours & Packages
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/gallery" className="text-white text-decoration-none">
                    Gallery
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact-us" className="text-white text-decoration-none">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Info</h5>
              <p className="mb-2">
                <i className="fas fa-phone me-2"></i> +92 321 1234567
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope me-2"></i> info@turkifytravels.com
              </p>
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i> Lahore, Pakistan
              </p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="text-center">
            <p className="mb-0">&copy; 2025 Turkify Travels. Created By Manahil Nasir</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;