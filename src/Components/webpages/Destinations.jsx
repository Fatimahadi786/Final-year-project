import React from 'react';
import './Destinations.scss'
//imported images===================>
import paris from '../Images/Paris.png';
import Dubia from '../Images/Dubia.jpg';
import London from '../Images/London.png';
import Iran from '../Images/Iran.jpg';

const destinations = [
  {
    id: 1,
    name: 'Paris',
    image: paris,
    description:
      'Paris is the capital of France and is known for its romantic atmosphere, world-class art, and delicious cuisine.',
  },
  {
    id: 2,
    name: 'London',
    image: London,
    description:
      'Tokyo is the capital of Japan and is famous for its modern technology, historic temples, and vibrant street life.',
  },
  {
    id: 3,
    name: 'Dubia',
    image: Dubia,
    description:
      'Paris is the capital of France and is known for its romantic atmosphere, world-class art, and delicious cuisine.',
  },
  {
    id: 4,
    name: 'Iran',
    image: Iran,
    description:
      'Tokyo is the capital of Japan and is famous for its modern technology, historic temples, and vibrant street life.',
  },
  {
    id: 5,
    name: 'Paris',
    image: paris,
    description:
      'Paris is the capital of France and is known for its romantic atmosphere, world-class art, and delicious cuisine.',
  },
  {
    id: 6,
    name: 'London',
    image: London,
    description:
      'Tokyo is the capital of Japan and is famous for its modern technology, historic temples, and vibrant street life.',
  },
  {
    id: 7,
    name: 'Dubia',
    image: Dubia,
    description:
      'Paris is the capital of France and is known for its romantic atmosphere, world-class art, and delicious cuisine.',
  },
  {
    id: 8,
    name: 'Iran',
    image: Iran,
    description:
      'Tokyo is the capital of Japan and is famous for its modern technology, historic temples, and vibrant street life.',
  },
  // Add more destinations here
];

const DestinationList = () => {
  return (
    <>
    <div className="centered-text">
    <h1>Popular Countries of the World</h1>
    <h4>Explore these popular countries known for their unique charm and attractions.</h4>
  </div>
    <div className="destination-list">
  
      {destinations.map((destination) => (
        <div key={destination.id} className="destination">
          <img src={destination.image} alt={destination.name} />
          <hr/>
          <h2>{destination.name}</h2>
          <hr />
          <p>{destination.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default DestinationList;
