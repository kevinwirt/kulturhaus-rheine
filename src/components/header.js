import React from "react";
import './header.css';

function Header({ scrollToSection, ueberUnsRef, kurseRef, kontaktRef }) {
    return(
        <header className="header">
            <nav>
                <button onClick={() => scrollToSection(ueberUnsRef)}>Über uns</button>
                <button onClick={() => scrollToSection(kurseRef)}>Kurse</button>
                <button onClick={() => scrollToSection(kontaktRef)}>Kontakt</button>
            </nav>
        </header>
    );
    
}

export default Header;