import { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    preferredDestination: '',
    travelDates: '',
    specialRequests: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create submission object
    const submission = {
      ...formData,
      id: Date.now(),
      type: 'contact'
    };
    
    // Get existing submissions from localStorage
    const existingSubmissions = JSON.parse(localStorage.getItem('travelSubmissions') || '[]');
    
    // Add new submission
    const updatedSubmissions = [submission, ...existingSubmissions];
    
    // Store in localStorage
    localStorage.setItem('travelSubmissions', JSON.stringify(updatedSubmissions));
    
    alert('Form submitted successfully! You can view it on the Info page.');
    
    setFormData({ 
      name: '', 
      age: '', 
      email: '', 
      phone: '', 
      preferredDestination: '', 
      travelDates: '', 
      specialRequests: '',
      agreeToTerms: false
    });
  };

  return (
    <div className="user-form-container">
      <div className="user-form-card">
        <h2 className="user-form-title">
          Travel Information Form
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="user-form-grid">
            
            <div>
              <label className="user-form-label">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="user-form-input"
              />
            </div>

            {/* Age */}
            <div>
              <label className="user-form-label">
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="1"
                max="120"
                className="user-form-input"
              />
            </div>

            {/* Email */}
            <div>
              <label className="user-form-label">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="user-form-input"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="user-form-label">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="user-form-input"
              />
            </div>

            <div>
              <label className="user-form-label">
                Preferred Destination
              </label>
              <select
                name="preferredDestination"
                value={formData.preferredDestination}
                onChange={handleChange}
                className="user-form-input"
              >
                <option value="">Select destination</option>
                <option value="Istanbul">Istanbul</option>
                <option value="Cappadocia">Cappadocia</option>
                <option value="Pamukkale">Pamukkale</option>
                <option value="Antalya">Antalya</option>
                <option value="Bodrum">Bodrum</option>
                <option value="Ephesus">Ephesus</option>
                <option value="Multiple">Multiple Destinations</option>
              </select>
            </div>

            {/* Travel Dates */}
            <div>
              <label className="user-form-label">
                Preferred Travel Dates
              </label>
              <input
                type="date"
                name="travelDates"
                value={formData.travelDates}
                onChange={handleChange}
                className="user-form-input"
              />
            </div>

          </div>

          {/* Special Requests */}
          <div className="user-form-special-requests">
            <label className="user-form-label">
              Special Requests or Requirements
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="4"
              placeholder="Any special requirements for your trip..."
              className="user-form-textarea"
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="user-form-terms">
            <div className="user-form-terms-wrapper">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="user-form-checkbox"
              />
              <label className="user-form-checkbox-label">
                I agree to the Terms and Conditions
              </label>
            </div>
          </div>

          <div className="user-form-submit-container">
            <button 
              type="submit"
              className="btn btn-primary user-form-submit-btn"
            >
              Submit Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;