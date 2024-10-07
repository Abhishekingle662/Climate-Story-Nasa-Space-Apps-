// components/LandingPage.js

"use client";

import React, { useState, useEffect } from 'react';
import WeatherChart from './WeatherChart';
import WeatherData from './WeatherData';
import CitySelector from './CitySelector';

const LandingPage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState({ name: 'Bloomington', lat: null, lon: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timezone, setTimezone] = useState('UTC'); // To store the timezone

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      let url = 'http://127.0.0.1:5000/weather?';
      if (city.name && !city.lat && !city.lon) {
        url += `city=${encodeURIComponent(city.name)}`;
      } else if (city.lat && city.lon) {
        url += `lat=${city.lat}&lon=${city.lon}`;
      } else {
        throw new Error('Invalid city data');
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data.weather_data);
      setTimezone(data.timezone);
    } catch (error) {
      setError(error.message);
      setWeatherData([]);
      setTimezone('UTC');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(selectedCity);
  }, [selectedCity]);

  return (
    <div style={{ padding: '20px' }}>
      <CitySelector onCityChange={setSelectedCity} />
      <h1>Weather Data Visualization for {selectedCity.name}</h1>
      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && weatherData.length > 0 && (
        <>
          <WeatherChart weatherData={weatherData} timezone={timezone} />
          {/* <WeatherData weatherData={weatherData} timezone={timezone} /> */}
        </>
      )}
      {!loading && !error && weatherData.length === 0 && <p>No data available for the selected city.</p>}
    </div>
  );
};

export default LandingPage;