import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCounties, setvisitedCountries]= useState([])
    const handleVisitedCountries = (country) => {
        console.log('handle visited countries', country);
        const newVisitedCountries=[...visitedCounties, country]
        setvisitedCountries(newVisitedCountries)
        
    }
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    console.log(countries);
    
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visied: {visitedCounties.length}</h3>
            <ol>
                {
                    visitedCounties.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                countries.map(country => <Country
                    key={country.cca3.cca3}
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;