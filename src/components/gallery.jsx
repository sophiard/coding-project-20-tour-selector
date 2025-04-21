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
      const response = await fetch('https://course-api.com/react-tours-project'); 
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
};
