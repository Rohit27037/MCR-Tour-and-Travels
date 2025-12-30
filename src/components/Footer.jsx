import React from 'react'


export default function Footer(){
const year = new Date().getFullYear()
return (
<footer className="site-footer">
<div className="container footer-inner">
<div className="footer-contact">
<p><strong>Email:</strong> <a href="mailto:mcrtravels05@gmail.com">mcrtravels05@gmail.com</a></p>

<p><strong>Location:</strong> <a href="https://share.google/dWp4u7PYks7vEHR7E" target="_blank" rel="noopener noreferrer">MCR TRAVELS, Azamgarh Road, Bharat Kunj, Mtrapuri, Husainabad, Jaunpur, Uttar Pradesh 222001</a></p>
<p><strong>Map:</strong> <a href="https://www.google.com/maps/search/Azamgarh+Road,+Bharat+Kunj,+Mtrapuri,+Husainabad,+Jaunpur,+Uttar+Pradesh+222001/@25.741041,82.65683,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D" target="_blank" rel="noopener noreferrer">Google Maps</a></p>
</div>
<div className="footer-copyright">
<small>© {year} MCR Tour & Travels — All rights reserved.</small>
</div>
</div>
</footer>
)
}