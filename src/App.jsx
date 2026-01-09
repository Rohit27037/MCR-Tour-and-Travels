import React from 'react'
import Header from './components/Header'
import FullWidthSlideshow from './components/FullWidthSlideshow'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

import slides from './data/slides'

export default function App() {
  return (
    <div className="app-root">
      <Header />

      <main>
        <FullWidthSlideshow items={slides} />

        <section className="container description">
          <h2>About MCR Tour &amp; Travels</h2>

          <p>
            MCR Tour &amp; Travels offers a modern, reliable fleet and experienced staff to make every trip
            safe and comfortable. We service weddings, local transfers and all-India tours, and provide
            customized group travel with vehicles suited to your needs.
          </p>

          <h3>Our available vehicle types and services include</h3>
          <ul>
            <li>2×2 sitting sleeper AC</li>
            <li>2×2 full sleeper AC</li>
            <li>3×2 sitting non-AC</li>
            <li>2×2 full sleeper non-AC</li>
            <li>10-seater mini bus for local service</li>
            <li>Mini buses for local travelers</li>
            <li>Coaches for wedding purposes</li>
            <li>All-India tour coaches</li>
            <li>Well-maintained buses</li>
            <li>Luxury buses available</li>
            <li>Experienced, professional staff</li>
          </ul>

          <p>
            We pride ourselves on well-maintained vehicles, comfortable travel options, and a professional crew
            to ensure punctuality and safety. For quotes or custom itineraries, contact our managers below.
          </p>
        </section>

        <Contacts />
      </main>

      <Footer />
    </div>
  )
}
