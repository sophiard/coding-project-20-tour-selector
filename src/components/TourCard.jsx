import React, {useState} from 'react';

//TourCard shows individual tour details
const TourCard = ({id, name, info, price, image, onRemove}) => { 
    //TourCard shows tour details
const [readMore, setReadMore] = useState(false); 
// toggle read more/less

   return (
    <article className='tour-card'>
        <img src={image} alt={name} /> {/* tour picture */}

        <div className="card-info">
        <h3>{name}</h3> {/* tour name */}
        <h5>${price}</h5> {/* tour price */}
        
        {/* tour description */}
        <p>
            {/* If true, show full info, else show less */}
            {readMore ? info : `${info.substring(0, 200)}...`} {/* toggle text */}

            <button onClick={() => setReadMore(!readMore)}>
                {readMore ? 'Show Less' : 'Read More'} {/* toggle button */}
            </button>
        </p>

        <button className ="btn-remove" onClick={() => onRemove(id)}> 
 Not Interested  {/* Remove tour from list */}
        </button>  
        </div>
    </article> 

   );

}

export default TourCard; 
// export the TourCard 
