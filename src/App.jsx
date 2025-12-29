// src/App.jsx
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
          <h2>About MCR Tour & Travels</h2>
          <p>
            MCR Tour & Travels offers a modern, reliable fleet and experienced staff to
            make every trip safe and comfortable. We service weddings, local transfers,
            all-India tours and customized group travel with vehicles suited to your needs.
          </p>

          <p>
            Our available vehicle types and services include:
            <br />
            <strong>
              2×2 sitting sleeper AC; 3×2 full sleeper AC; 3×2 sitting non-AC; 3×2 full
              sleeper AC; 10-seater mini bus for local service; mini buses for local
              travelers; specially furnished coaches for wedding purposes; all-India tour
              coaches.
            </strong>
          </p>

          <p>
            We pride ourselves on well-maintained buses, luxury options where required,
            and a professional crew to ensure timely, comfortable travel. For quotes or
            custom itineraries, contact our managers below.
          </p>
        </section>

        <Contacts />
      </main>

      <Footer />
    </div>
  )
}
