import React from 'react';
import './aktuelles.css'; // Beispiel für eine CSS-Datei

const Aktuelles = () => {
  // Beispiel-Daten für Aktuelles
  const newsItems = [
    {
      id: 1,
      title: 'Neuer Workshop verfügbar',
      image: 'https://via.placeholder.com/150',
      description: 'Melden Sie sich jetzt für unseren neuen Workshop an!',
      date: '01.07.2024'
    },
    {
      id: 2,
      title: 'Sommeraktion gestartet',
      image: 'https://via.placeholder.com/150',
      description: 'Profitieren Sie von unseren Sommerangeboten!',
      date: '15.06.2024'
    },
    // Weitere Nachrichten-Elemente hier hinzufügen
  ];

  return (
    <div className="aktuelles-container">
      <h2>Aktuelles</h2>
      <div className="aktuelles-grid">
        {newsItems.map(item => (
          <div key={item.id} className="news-item">
            <img src={item.image} alt={item.title} />
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="news-date">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aktuelles;
