import React, { useState } from "react"; 
import Gallery from "./components/Gallery"; // tour card list
import DestinationSelector from "./components/DestinationSelector"; // dropdown filter
import './styles/styles.css'; // makes custom styles

function App() {
  const [tours, setTours] = useState([]);
   // stores all tour data
  const [selectedDestination, setSelectedDestination] = useState('All'); 
  // dropdown choice

  
  const removeTour = (id) => {
    // Remove a tour by ID
    setTours((tours) => tours.filter((tour) => tour.id !== id)); 
  };

 
  const destinations = ['All', ...new Set(tours.map((tour) => tour.name))];
 // Create destination options for dropdown
  return (
    <main>
      <h1>Tour Explorer</h1> {/* heading */}
      
      {/* Dropdown  */}
      <DestinationSelector
        destinations={destinations} 
        // dropdown list
        selectedDestination={selectedDestination} 
        // current selection
        onDestinationChange={setSelectedDestination}
         // updates selection
      />

      {/* Tour cards shown below */}
      <Gallery
        tours={tours} // full tour list
        setTours={setTours} // update tour list
        onRemove={removeTour} // 
        selectedDestination={selectedDestination} // filtering
      />
    </main>
  );
}

export default App;
