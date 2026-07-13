import { useEffect, useState } from 'react';

const Info = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [bookingSubmissions, setBookingSubmissions] = useState([]);

  useEffect(() => {
    const fetchTurkishProvinces = async () => {
      try {
        const response = await fetch('https://api.turkiyeapi.dev/v1/provinces');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setCountries(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTurkishProvinces();
  }, []);

  useEffect(() => {
    const contactData = JSON.parse(localStorage.getItem('travelSubmissions') || '[]');
    setContactSubmissions(contactData);

    const bookingData = JSON.parse(localStorage.getItem('bookingSubmissions') || '[]');
    setBookingSubmissions(bookingData);
  }, []);

  if (loading) return <p>Loading Turkish provinces...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>ApiData & Form Submissions</h1>

      <h2>Turkish Provinces</h2>
      <ul>
        {countries.map(province => (
          <li key={province.id}>
            <strong>{province.name}</strong> — 
            Population: {province.population}, 
            Area: {province.area}
          </li>
        ))}
      </ul>

      <h2>Contact Form Submissions</h2>
      {contactSubmissions && contactSubmissions.length > 0 ? (
        contactSubmissions.map(submittedData => (
          <div
            key={submittedData.id}
            style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}
          >
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Preferred Destination:</strong> {submittedData.preferredDestination}</p>
            <p><strong>Travel Dates:</strong> {submittedData.travelDates}</p>
            <p><strong>Special Requests:</strong> {submittedData.specialRequests}</p>
            <p><strong>Agreed to Terms:</strong> {submittedData.agreeToTerms ? 'Yes' : 'No'}</p>
          </div>
        ))
      ) : (
        <p>No contact form submissions yet.</p>
      )}

      <h2>Booking Form Submissions</h2>
      {bookingSubmissions && bookingSubmissions.length > 0 ? (
        bookingSubmissions.map(submittedData => (
          <div
            key={submittedData.id}
            style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}
          >
            <h3>Submitted Data:</h3>
            <p><strong>Full Name:</strong> {submittedData.fullName}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Tour Name:</strong> {submittedData.tourName}</p>
            <p><strong>Tour Price:</strong> ${submittedData.tourPrice}</p>
            <p><strong>Tour Date:</strong> {submittedData.tourDate}</p>
            <p><strong>Number of Travelers:</strong> {submittedData.travelers}</p>
            <p><strong>Special Requests:</strong> {submittedData.specialRequests}</p>
            <p><strong>Agreed to Terms:</strong> {submittedData.agreeToTerms ? 'Yes' : 'No'}</p>
          </div>
        ))
      ) : (
        <p>No booking form submissions yet.</p>
      )}
    </div>
  );
};

export default Info;
