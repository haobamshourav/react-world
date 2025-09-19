import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    // console.log(country.population);
    const [visited, setVisited] = useState(false)

    
    

    const handleVisited = () => {
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }

        handleVisitedCountries(country)
        
    }
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Country Name: {country.name.common}</h3>
            <p>Popularion: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" :"Small Country"} </p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;