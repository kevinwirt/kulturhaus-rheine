import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Über uns</h3>
          <p>Informationen über den Verein.</p>
        </div>
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Musterstraße 1, 12345 Musterstadt</p>
          <p>+49 123 456 7890</p>
          <p>info@musterfirma.de</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#aktuelles">Aktuelles</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#kurse">Kurse</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Verein. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

export default Footer;
