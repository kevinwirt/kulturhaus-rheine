import React from "react";
import "./events.css";

const events = [
  {
    title: 'Event 1',
    date: '01.01.2024',
    description: 'Beschreibung des Events 1.',
  },
  {
    title: 'Event 2',
    date: '15.03.2024',
    description: 'Beschreibung des Events 2.',
  },
  // Weitere Events
];

function Events() {
  return (
    <div className="events">
      <h1>Events</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event" key={index}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
