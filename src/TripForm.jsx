
import React, { useState } from 'react';
import { createTrip } from './AxiosInstance';

const TripForm = () => {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTrip({ name, destination, date });
      setName('');
      setDestination('');
      setDate('');
      // Optionally: Add a success message or update the trip list
    } catch (error) {
      console.error('Error creating trip:', error);
    }
  };

  return (
    <div>
      <h2>Create Trip</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Destination</label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
};

export default TripForm;
