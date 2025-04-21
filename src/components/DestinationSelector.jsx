import React from 'react';

// dropdown
const DestinationSelector = ({ destinations, selectedDestination, onDestinationChange }) => {
    return (
        <div className="filter">
            <label htmlFor="destination">Filter by Destination:</label>
            {/* dropdown menu */}
            <select
                id="destination"
                value={selectedDestination} 
                // current value
                onChange={(e) => onDestinationChange(e.target.value)}
                 // update selection
            >
                {/* loop through options */}
                {destinations.map((destination, index) => (
                    <option key={index} value={destination}>
                        {destination} {/* option label */}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector; // export component