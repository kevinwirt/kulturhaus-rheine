import React, { useState } from 'react';
import './header.css';

const Header = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="left-section">
        <div className="scroll-buttons">
          <button className="button" onClick={() => scrollToSection('aktuellesRef')}>
            Aktuelles
          </button>
          <button className="button" onClick={() => scrollToSection('eventsRef')}>
            Events
          </button>
          <button className="button" onClick={() => scrollToSection('kurseRef')}>
            Kurse
          </button>
          <button className="button" onClick={() => scrollToSection('kontaktRef')}>
            Kontakt
          </button>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          &#9776;
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <button className="button" onClick={() => { scrollToSection('aktuellesRef'); toggleMenu(); }}>
              Aktuelles
            </button>
            <button className="button" onClick={() => { scrollToSection('eventsRef'); toggleMenu(); }}>
              Events
            </button>
            <button className="button" onClick={() => { scrollToSection('kurseRef'); toggleMenu(); }}>
              Kurse
            </button>
            <button className="button" onClick={() => { scrollToSection('kontaktRef'); toggleMenu(); }}>
              Kontakt
            </button>
          </div>
        )}
      </div>
      <div className="language-buttons">
        <button className="button">DE</button>
        <button className="button">EN</button>
      </div>
    </div>
  );
}

export default Header;
