import React from 'react'

export default function Contacts(){
  const mapsQuery = encodeURIComponent('123 Main Road, YourCity, YourState')
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

  return (
    <section className="container contacts">
      <h2>Contact our Managers</h2>
      <div className="contacts-grid">
        <div className="contact-card">
          <h3>Mitra Sen Singh (Bablu Singh)</h3>
          <p>Phone: <a href="tel:9415269881">9415269881</a>, <a href="tel:8369525201">8369525201</a></p>
          
        </div>

        <div className="contact-card">
          <h3>Manoj Singh</h3>
          <p>Phone: <a href="tel:9839836660">9839836660</a></p>
        </div>

        <div className="contact-card">
          <h3>Dev Pratap Singh</h3>
          <p>Phone: <a href="tel:9918644224">9918644224</a></p>
          <p>Email: <a href="mailto:dev@example.com">dev@example.com</a></p>
          <p>Location: <a href={mapsUrl} target="_blank" rel="noreferrer">View on map</a></p>
        </div>
      </div>
    </section>
  )
}
