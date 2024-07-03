import React from 'react';
import './kontakt.css';

function Kontakt() {
  return (
    <div className="kontakt">
      <h2>Kontaktieren Sie uns</h2>
      <div className="contact-info">
        <p><strong>Adresse:</strong> Musterstraße 1, 12345 Musterstadt</p>
        <p><strong>Telefon:</strong> +49 123 456 7890</p>
        <p><strong>Email:</strong> info@musterfirma.de</p>
        <p><strong>Öffnungszeiten:</strong> Montag - Freitag, 9:00 - 18:00 Uhr</p>
      </div>
    </div>
  );
}

export default Kontakt;
