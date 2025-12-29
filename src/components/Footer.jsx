import React from 'react'


export default function Footer(){
const year = new Date().getFullYear()
return (
<footer className="site-footer">
<div className="container footer-inner">
<div className="footer-contact">
<p><strong>Email:</strong> <a href="mailto:info@mcrtravels.example">info@mcrtravels.example</a></p>
<p><strong>Location:</strong> <a href="https://www.google.com/maps/search/?api=1&query=123+Main+Road+YourCity+YourState" target="_blank" rel="noopener noreferrer">123 Main Road, YourCity, YourState</a></p>
</div>
<div className="footer-copyright">
<small>© {year} MCR Tour & Travels — All rights reserved.</small>
</div>
</div>
</footer>
)
}