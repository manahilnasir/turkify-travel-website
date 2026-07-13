import { useState } from 'react';
import UserForm from "./UserForm";
import '../css/contact.css';

const ContactUs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <>
      {/* Page Header */}
      <section className="copage-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="page-title animate-slide-left text-shadow">Contact Us</h1>
              <p className="page-subtitle animate-fade-in-delay">
                Get in touch and let us plan your perfect Turkish adventure
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="contact-info-card contact-info-card-bordered">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>Visit Our Office</h4>
                <p>
                  Gulshan Square, No: 15
                  <br />
                  Lahore 54000
                  <br />
                  Pakistan
                </p>
                <button className="btn btn-dark btn-sm">Get Directions</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-card contact-info-card-bordered">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h4>Call Us</h4>
                <p>
                  Phone: +92 321 1234567
                  <br />
                  WhatsApp: +92 321 1234567
                  <br />
                  Available 24/7
                </p>
                <button className="btn btn-dark btn-sm">Call Now</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-card contact-info-card-bordered">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Email Us</h4>
                <p>
                  General: info@turkifytravels.com
                  <br />
                  Bookings: bookings@turkifytravels.com
                  <br />
                  Support: support@turkifytravels.com
                </p>
                <button className="btn btn-dark btn-sm">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    <UserForm/>

      <section className="py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="section-title faq-section-title">
        Frequently Asked Questions
      </h2>
      <p className="section-subtitle faq-section-subtitle">
        Quick answers to common questions about our services
      </p>
    </div>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div className="accordion" id="faqAccordion">
          {/* FAQ Item 1 */}
          <div className="accordion-item" style={{ 
            border: '3px solid #E8B923', 
            borderRadius: '10px', 
            marginBottom: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            backgroundColor: 'white'
          }}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openFAQ !== 1 ? 'collapsed' : ''}`}
                type="button"
                onClick={() => toggleFAQ(1)}
              >
                What's included in your tour packages?
              </button>
            </h2>
            {openFAQ === 1 && (
              <div className="accordion-body" style={{ 
                padding: '20px',
                backgroundColor: '#F5EBD0',
                color: '#333',
                lineHeight: '1.6',
                borderRadius: '0 0 8px 8px',
                fontSize: '16px'
              }}>
                Our tour packages typically include professional guide services, transportation, entrance fees to attractions, and some meals. Specific inclusions vary by tour, so please check individual tour descriptions for details.
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="accordion-item" style={{ 
            border: '3px solid #E8B923', 
            borderRadius: '10px', 
            marginBottom: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            backgroundColor: 'white'
          }}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openFAQ !== 2 ? 'collapsed' : ''}`}
                type="button"
                onClick={() => toggleFAQ(2)}
              >
                How far in advance should I book?
              </button>
            </h2>
            {openFAQ === 2 && (
              <div className="accordion-body" style={{ 
                padding: '20px',
                backgroundColor: '#F5EBD0',
                color: '#333',
                lineHeight: '1.6',
                borderRadius: '0 0 8px 8px',
                fontSize: '16px'
              }}>
                We recommend booking at least 2-4 weeks in advance, especially during peak season (April-October). For special experiences like hot air balloon rides, earlier booking is advised due to limited availability.
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="accordion-item" style={{ 
            border: '3px solid #E8B923', 
            borderRadius: '10px', 
            marginBottom: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            backgroundColor: 'white'
          }}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openFAQ !== 3 ? 'collapsed' : ''}`}
                type="button"
                onClick={() => toggleFAQ(3)}
              >
                Do you offer custom tours?
              </button>
            </h2>
            {openFAQ === 3 && (
              <div className="accordion-body" style={{ 
                padding: '20px',
                backgroundColor: '#F5EBD0',
                color: '#333',
                lineHeight: '1.6',
                borderRadius: '0 0 8px 8px',
                fontSize: '16px'
              }}>
                Yes! We specialize in creating personalized itineraries based on your interests, budget, and schedule. ContactUs us with your preferences, and we'll design a unique Turkish adventure just for you.
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="accordion-item" style={{ 
            border: '3px solid #E8B923', 
            borderRadius: '10px', 
            marginBottom: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            backgroundColor: 'white'
          }}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openFAQ !== 4 ? 'collapsed' : ''}`}
                type="button"
                onClick={() => toggleFAQ(4)}
              >
                What's your cancellation policy?
              </button>
            </h2>
            {openFAQ === 4 && (
              <div className="accordion-body" style={{ 
                padding: '20px',
                backgroundColor: '#F5EBD0',
                color: '#333',
                lineHeight: '1.6',
                borderRadius: '0 0 8px 8px',
                fontSize: '16px'
              }}>
                Cancellations made 14+ days before the tour date receive a full refund. Cancellations 7-13 days prior receive 50% refund. Cancellations within 7 days are non-refundable, except in cases of emergency or force majeure.
              </div>
            )}
          </div>

          {/* FAQ Item 5 */}
          <div className="accordion-item" style={{ 
            border: '3px solid #E8B923', 
            borderRadius: '10px', 
            marginBottom: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            backgroundColor: 'white'
          }}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openFAQ !== 5 ? 'collapsed' : ''}`}
                type="button"
                onClick={() => toggleFAQ(5)}
              >
                Are your guides licensed?
              </button>
            </h2>
            {openFAQ === 5 && (
              <div className="accordion-body" style={{ 
                padding: '20px',
                backgroundColor: '#F5EBD0',
                color: '#333',
                lineHeight: '1.6',
                borderRadius: '0 0 8px 8px',
                fontSize: '16px'
              }}>
                Absolutely! All our guides are licensed by the Turkish Ministry of Tourism and Culture. They are local experts with extensive knowledge of Turkish history, culture, and traditions.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="py-5 bg-light">
  <div className="container">
    <div className="text-center mb-4">
      <h2 className="section-title">Find Us</h2>
      <p className="section-subtitle">Visit our office in the heart of Istanbul</p>
    </div>
    <div className="map-container map-container-styled">
      <iframe
        title="Turkify Travels Office"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.903244241068!2d28.97601831507928!3d41.00823657930116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab89aa1b1c6d3%3A0x7b9a1f1a3b2c1e7!2sSultanahmet%20Square%2C%20Istanbul!5e0!3m2!1sen!2str!4v1600000000000!5m2!1sen!2str"
        width="100%"
        height="400"
        className="iframe-no-border"
        allowFullScreen=""
      ></iframe>
    </div>
  </div>
</section>


    </>
  );
}
export default ContactUs;