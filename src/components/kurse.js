import React from 'react';
import './kurse.css';

const courses = [
  {
    title: 'Course 1',
    description: 'Detailed description for course 1',
    details: 'Here are more details about course 1, such as schedule, prerequisites, and more.',
    image: 'path/to/image1.jpg' // Replace with actual image paths
  },
  {
    title: 'Course 2',
    description: 'Detailed description for course 2',
    details: 'Here are more details about course 2, such as schedule, prerequisites, and more.',
    image: 'path/to/image2.jpg' // Replace with actual image paths
  },
  {
    title: 'Course 3',
    description: 'Detailed description for course 3',
    details: 'Here are more details about course 3, such as schedule, prerequisites, and more.',
    image: 'images/muster_herz.jpg' // Replace with actual image paths
  }
];

function Kurse() {
  return (
    <div className="kurse">
      <h1>Unsere Kurse</h1>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course" key={index}>
            <img src={course.image} alt={course.title} />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>{course.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kurse;
