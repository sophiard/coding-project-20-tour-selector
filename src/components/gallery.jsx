import React, { useEffect, useState } from 'react';
import TourCard from './TourCard'; 
// single tour UI

const Gallery = ({ tours, setTours, onRemove, selectedDestination }) => {
  const [loading, setLoading] = useState(true); 
  // true = still loading
  const [error, setError] = useState(false); 
  // error flag

  const fetchTours = async () => {
    try { // get tour data from API
        const response = await fetch('/api/react-tours-project');
      // API call
      const data = await response.json();
      setTours(data); // update tour list
    } catch (error) {
      console.error('Error fetching tours:', error); 
      // show fetch fail
      setError(true); // mark error
    } finally {
      setLoading(false); // done loading
    }
  }; 

  useEffect(() => {
    fetchTours(); // run once when page loads
  }, []); // no deps = run only on mount

  // filter list based on dropdown
  const filteredTours = selectedDestination === 'All'
    ? tours
    : tours.filter((tour) => tour.name === selectedDestination);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2> {/* show while fetching */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Something went wrong...</h2> {/* fetch failed */}
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours available</h2> {/* empty list */}
        <button className="btn" onClick={fetchTours}>Refresh</button> {/* reload */}
      </div>
    );
  }

  return (
    <section className="tours">
      <h2>Our Tours</h2> {/* title */}
      <div className="tours-list">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} {...tour} onRemove={onRemove} /> 
          // tour cards
        ))}
      </div>
    </section>
  );
};

export default Gallery;
