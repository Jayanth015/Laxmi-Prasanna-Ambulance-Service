

import { useState } from 'react';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', drop: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setForm({ name: '', phone: '', pickup: '', drop: '', time: '' });
    }, 2000);
  };

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', fontFamily: 'Avenir, Arial, sans-serif' }}>
      <header style={{ background: '#b71c1c', color: '#fff', padding: '1.5rem 0', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '2.2rem', margin: 0 }}>Laxmi Prasanna Ambulance Service in Hyderabad</h1>
        <div style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Call <a href="tel:9640701480" style={{ color: '#fff', fontWeight: 700, textDecoration: 'underline', fontSize: '1.5rem' }}>9640701480</a></div>
        <button onClick={() => setShowForm(true)} style={{ marginTop: '1rem', background: '#fff', color: '#b71c1c', border: 'none', borderRadius: 6, padding: '0.7rem 2rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>CLICK HERE TO BOOK AMBULANCE</button>
      </header>

      <main style={{ maxWidth: 900, margin: '2rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: '2rem 1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://www.ambulanceservices.in/wp-content/uploads/2019/03/Ambulance-services-in-hyderabad.jpg" alt="Ambulance Service Hyderabad" style={{ maxWidth: 340, width: '100%', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
          <div style={{ flex: 1, minWidth: 260 }}>
            <h2 style={{ color: '#b71c1c', fontSize: '1.5rem', marginBottom: 8 }}>24/7 Emergency Patient Transport</h2>
            <p style={{ color: '#333', fontSize: '1.1rem', marginBottom: 12 }}>
              We provide private ambulance service in Hyderabad, Secunderabad, Telangana & AP since 1996. Our ambulances are stationed at top hospitals and key locations for rapid response. We offer patient transfer, air ambulance, and dead body transportation across states.
            </p>
            <a href="tel:9640701480" style={{ display: 'inline-block', background: '#388e3c', color: '#fff', fontWeight: 700, borderRadius: 6, padding: '0.6rem 1.5rem', fontSize: '1.1rem', textDecoration: 'none', marginTop: 8 }}>Call Now: 9640701480</a>
          </div>
        </div>
        <section style={{ marginTop: 36 }}>
          <h3 style={{ color: '#b71c1c', fontSize: '1.2rem', marginBottom: 8 }}>About Us</h3>
          <p style={{ color: '#444', fontSize: '1rem' }}>
            Laxmi Prasanna Ambulance Service operates 24/7 with a fleet of well-equipped ambulances and trained staff. We ensure quick response and safe patient transport. Our services are available for emergencies, hospital transfers, and long-distance patient movement.
          </p>
        </section>
      </main>

      {showForm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 10, padding: '2rem 1.5rem', maxWidth: 350, width: '100%', position: 'relative', boxShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
            <button onClick={() => setShowForm(false)} style={{ position: 'absolute', top: 10, right: 16, background: 'none', border: 'none', fontSize: 28, color: '#b71c1c', cursor: 'pointer' }}>&times;</button>
            <h2 style={{ color: '#b71c1c', fontSize: '1.2rem', marginBottom: 16, textAlign: 'center' }}>Book an Ambulance</h2>
            {submitted ? (
              <div style={{ color: '#388e3c', textAlign: 'center', fontWeight: 600, fontSize: '1.1rem' }}>Booking submitted! We will contact you soon.</div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input required name="name" value={form.name} onChange={handleChange} placeholder="Your Name" style={{ border: '1px solid #ccc', borderRadius: 5, padding: '0.6rem 0.8rem', fontSize: '1rem' }} />
                <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" type="tel" style={{ border: '1px solid #ccc', borderRadius: 5, padding: '0.6rem 0.8rem', fontSize: '1rem' }} />
                <input required name="pickup" value={form.pickup} onChange={handleChange} placeholder="Pickup Location" style={{ border: '1px solid #ccc', borderRadius: 5, padding: '0.6rem 0.8rem', fontSize: '1rem' }} />
                <input required name="drop" value={form.drop} onChange={handleChange} placeholder="Drop Location" style={{ border: '1px solid #ccc', borderRadius: 5, padding: '0.6rem 0.8rem', fontSize: '1rem' }} />
                <input required name="time" value={form.time} onChange={handleChange} placeholder="Time" type="datetime-local" style={{ border: '1px solid #ccc', borderRadius: 5, padding: '0.6rem 0.8rem', fontSize: '1rem' }} />
                <button type="submit" style={{ background: '#b71c1c', color: '#fff', border: 'none', borderRadius: 6, padding: '0.7rem 0', fontWeight: 700, fontSize: '1.1rem', marginTop: 8, cursor: 'pointer' }}>Submit</button>
              </form>
            )}
          </div>
        </div>
      )}

      <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: '1.2rem 0', marginTop: 40, fontSize: '0.95rem' }}>
        &copy; {new Date().getFullYear()} Laxmi Prasanna Ambulance Service. All rights reserved.
      </footer>
    </div>
  );
}
