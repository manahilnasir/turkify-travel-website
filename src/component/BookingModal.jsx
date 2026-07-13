import { useState } from 'react';

const BookingModal = ({ isOpen, onClose, selectedTour }) => {
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    email: '',
    tourDate: '',
    travelers: '',
    specialRequests: '',
    agreeToTerms: false
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    
    // Create booking submission object
    const bookingSubmission = {
      ...bookingForm,
      tourName: selectedTour?.name,
      tourPrice: selectedTour?.price,
      id: Date.now(),
      type: 'booking'
    };
    
    // Get existing booking submissions from localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookingSubmissions') || '[]');
    
    // Add new booking submission
    const updatedBookings = [bookingSubmission, ...existingBookings];
    
    // Store in localStorage
    localStorage.setItem('bookingSubmissions', JSON.stringify(updatedBookings));
    
    console.log('Booking submitted:', { tour: selectedTour, form: bookingForm });
    alert(`Thank you! Your booking for ${selectedTour?.name} has been submitted. You can view it on the Info page.`);
    
    setBookingForm({
      fullName: '',
      email: '',
      tourDate: '',
      travelers: '',
      specialRequests: '',
      agreeToTerms: false
    });
    onClose();
  };

  // Don't render if modal is not open
  if (!isOpen) return null;

  return (
    <div 
      className="modal fade show booking-modal-backdrop"
      onClick={onClose} // Close when clicking backdrop
    >
      <div 
        className="modal-dialog modal-lg booking-modal-dialog"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="modal-content booking-modal-content">
          {/* Modal Header */}
          <div className="modal-header booking-modal-header">
            <h5 className="modal-title booking-modal-title">
              Book Your Tour - {selectedTour?.name}
            </h5>
            <button 
              type="button" 
              className="btn-close booking-modal-close"
              onClick={onClose}
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body booking-modal-body">
            <form onSubmit={handleSubmitBooking}>
              <div className="booking-form-grid">
                
                {/* Full Name */}
                <div>
                  <label className="booking-form-label">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={bookingForm.fullName}
                    onChange={handleFormChange}
                    required
                    className="booking-form-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="booking-form-label">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={bookingForm.email}
                    onChange={handleFormChange}
                    required
                    className="booking-form-input"
                  />
                </div>

                {/* Tour Date */}
                <div>
                  <label className="booking-form-label">
                    Tour Date *
                  </label>
                  <input 
                    type="date" 
                    name="tourDate"
                    value={bookingForm.tourDate}
                    onChange={handleFormChange}
                    required
                    className="booking-form-input"
                  />
                </div>

                {/* Number of Travelers */}
                <div>
                  <label className="booking-form-label">
                    Number of Travelers *
                  </label>
                  <select 
                    name="travelers"
                    value={bookingForm.travelers}
                    onChange={handleFormChange}
                    required
                    className="booking-form-input"
                  >
                    <option value="">Select...</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>

              </div>

              {/* Special Requests */}
              <div className="booking-special-requests">
                <label className="booking-form-label">
                  Special Requests
                </label>
                <textarea 
                  name="specialRequests"
                  value={bookingForm.specialRequests}
                  onChange={handleFormChange}
                  rows="3"
                  placeholder="Any special dietary requirements, accessibility needs, or requests..."
                  className="booking-form-textarea"
                />
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="booking-terms-container">
                <div className="booking-terms-wrapper">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={bookingForm.agreeToTerms}
                    onChange={handleFormChange}
                    required
                    className="booking-terms-checkbox"
                  />
                  <label className="booking-terms-label">
                    I agree to the Terms and Conditions
                  </label>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="booking-modal-footer">
                <button 
                  type="button" 
                  onClick={onClose}
                  className="booking-cancel-btn"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="booking-submit-btn"
                >
                  Book Now - ${selectedTour?.price}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;