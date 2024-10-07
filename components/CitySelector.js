// components/CitySelector.js

"use client";

import React, { useState, useEffect } from 'react';

const CitySelector = ({ onCityChange }) => {
  const [predefinedCities, setPredefinedCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);

  // Fetch predefined cities from the backend
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/cities');
        if (!response.ok) {
          throw new Error('Failed to fetch predefined cities');
        }
        const data = await response.json();
        setPredefinedCities(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  // Fetch search results from the backend when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      setIsSearching(true);
      setSearchError(null);
      try {
        const response = await fetch(`http://127.0.0.1:5000/search?q=${encodeURIComponent(searchQuery)}`);
        if (!response.ok) {
          if (response.status === 404) {
            setSearchResults([]);
          } else {
            throw new Error('Failed to fetch search results');
          }
        } else {
          const data = await response.json();
          setSearchResults([data]); // Assuming /search returns a single result
        }
      } catch (error) {
        setSearchError('Error fetching search results');
        console.error(error);
      } finally {
        setIsSearching(false);
      }
    };

    // Debounce the search to avoid excessive API calls
    const debounceTimeout = setTimeout(() => {
      fetchSearchResults();
    }, 500); // 500ms debounce

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  // Handle selection from predefined cities or search results
  const handleSelection = (city) => {
    if (typeof city === 'string') {
      // Predefined city selected by name
      onCityChange({ name: city, lat: null, lon: null });
    } else if (city && city.lat && city.lon) {
      // Searched city selected with coordinates
      onCityChange({ name: city.name, lat: city.lat, lon: city.lon });
    }
    // Reset search
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="city-search" style={{ marginRight: '10px' }}>Search City:</label>
      <input
        type="text"
        id="city-search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter city name"
        style={{ padding: '8px', fontSize: '16px', width: '200px' }}
      />
      {isSearching && <p>Searching...</p>}
      {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
      {searchResults.length > 0 && (
        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
          {searchResults.map((result, index) => (
            <li
              key={index}
              onClick={() => handleSelection(result)}
              style={{ cursor: 'pointer', padding: '5px 0', borderBottom: '1px solid #ccc' }}
            >
              {result.name} ({result.lat.toFixed(4)}, {result.lon.toFixed(4)})
            </li>
          ))}
        </ul>
      )}
      <hr style={{ margin: '20px 0' }} />
      <label htmlFor="predefined-city" style={{ marginRight: '10px' }}>Or Select Predefined City:</label>
      <select
        id="predefined-city"
        onChange={(e) => handleSelection(e.target.value)}
        defaultValue=""
        style={{ padding: '8px', fontSize: '16px' }}
      >
        <option value="" disabled>
          -- Select a city --
        </option>
        {predefinedCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;