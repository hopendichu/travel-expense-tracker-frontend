import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await axios.get('/api/trips/');
      setTrips(response.data);
    };
    fetchTrips();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/trips/${id}/`);
      setTrips(trips.filter(trip => trip.id !== id));
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h1>My Trips</h1>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <Link to={`/trips/${trip.id}`}>{trip.destination}</Link>
            <button onClick={() => handleDelete(trip.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
