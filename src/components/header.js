import React from "react";
import './header.css';

function Header({ scrollToSection, aktuellesRef, eventsRef, kurseRef, kontaktRef, kontaktFormRef }) {
  const changeLanguage = (language) => {
    // Logik zum Ändern der Sprache
    console.log(`Sprache geändert zu: ${language}`);
  };

  return (
    <header className="header">
      <nav>
        <button onClick={() => scrollToSection(aktuellesRef)}>Aktuelles</button>
        <button onClick={() => scrollToSection(eventsRef)}>Events</button>
        <button onClick={() => scrollToSection(kurseRef)}>Kurse</button>
        <button onClick={() => scrollToSection(kontaktRef)}>Kontakt</button>
        <button onClick={() => scrollToSection(kontaktFormRef)}>Kontaktformular</button>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('de')}>DE</button>
          <button onClick={() => changeLanguage('ru')}>RU</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
