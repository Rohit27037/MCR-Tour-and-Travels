// src/components/FullWidthSlideshow.jsx
import React, { useEffect, useRef, useState } from 'react'

export default function FullWidthSlideshow({ items = [], imageDelay = 3000 }) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)
  const videoRefs = useRef([])

  // go to next slide (clear timers)
  function next() {
    clearTimer()
    setIndex(i => (i + 1) % items.length)
  }

  function prev() {
    clearTimer()
    setIndex(i => (i - 1 + items.length) % items.length)
  }

  function clearTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    // reset timers and pause other videos
    clearTimer()
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        try { v.pause(); v.currentTime = 0 } catch (e) {}
      }
    })

    const current = items[index]
    if (!current) return

    if (current.type === 'image') {
      // schedule next after imageDelay
      timerRef.current = setTimeout(() => next(), imageDelay)
    } else if (current.type === 'video') {
      const vid = videoRefs.current[index]
      if (vid) {
        // attempt autoplay muted (most browsers allow muted autoplay)
        vid.currentTime = 0
        vid.muted = true
        const playPromise = vid.play()
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {
            // autoplay was blocked -> show controls so user can start it
            try { vid.controls = true } catch (e) {}
          })
        }
        // we rely on onEnded handler on the <video> to call next()
      } else {
        // fallback timeout if video not available
        timerRef.current = setTimeout(() => next(), 30000)
      }
    }

    return () => clearTimer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, items, imageDelay])

  // keyboard left/right support
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <section className="slideshow-wrap" aria-label="MCR slideshow">
      <div className="slideshow-inner">
        {items.map((it, i) => (
          <div key={i} className={`slide ${i === index ? 'active' : ''}`}>
            {it.type === 'image' ? (
              <img src={it.src} alt={it.alt || `Slide ${i + 1}`} loading="lazy" />
            ) : (
              <video
                ref={el => (videoRefs.current[i] = el)}
                src={it.src}
                muted
                playsInline
                preload="metadata"
                onEnded={() => next()}
                // control visibility handled in useEffect on autoplay failure
              />
            )}
          </div>
        ))}

        {/* manual controls */}
        <button className="sl-nav prev" onClick={prev} aria-label="Previous slide">‹</button>
        <button className="sl-nav next" onClick={next} aria-label="Next slide">›</button>

        {/* dots */}
        <div className="sl-dots" role="tablist" aria-label="Slide selection">
          {items.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'on' : ''}`}
              onClick={() => { clearTimer(); setIndex(i) }}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
