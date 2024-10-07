"use client";

import React, { useState, useEffect } from 'react';
import WeatherChart from './WeatherChart';
import WeatherData from './WeatherData';
import CitySelector from './CitySelector';
import NewsSlideshow from './NewsSlideshow';

const LandingPage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState({ name: 'Bloomington', lat: null, lon: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timezone, setTimezone] = useState('UTC');
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (e) => {
    e.preventDefault();
    const query = encodeURIComponent(searchTerm);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
    setSearchTerm('');
  };

  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '40px',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      boxSizing: 'border-box'
    }}>
      <style jsx>{`
        @media (max-width: 768px) {
          .flex-container {
            flex-direction: column;
          }
          .flex-item {
            margin-right: 0;
            margin-bottom: 40px;
          }
        }
        .section {
          margin-bottom: 60px;
        }
        .header {
          text-align: center;
          margin-bottom: 40px;
        }
        .title {
          color: #00796b;
          margin-bottom: 20px;
        }
        .subtitle {
          font-size: 1.2em;
          margin-bottom: 20px;
        }
        .form {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 60px;
        }
        .input {
          padding: 15px;
          margin-right: 20px;
          border-radius: 5px;
          border: 1px solid #00796b;
          flex: 1;
        }
        .button {
          padding: 15px 25px;
          border-radius: 5px;
          border: none;
          background-color: #00796b;
          color: white;
          cursor: pointer;
        }
        .link {
          color: #81c784;
          text-decoration: underline;
        }
        .list {
          list-style-type: none;
          padding: 0;
        }
        .list-item {
          margin-bottom: 20px;
        }
      `}</style>
      <div className="flex-container" style={{ display: 'flex' }}>
        <div className="flex-item" style={{ marginRight: '40px' }}>
          <NewsSlideshow />
        </div>
        <div className="flex-item" style={{ flex: 1 }}>
          <header className="header">
            <h1 className="title">Climate Story: NASA Space Apps Challenge</h1>
            <p className="subtitle">Explore Planet's Future with Technology!</p>
          </header>
          <section className="section">
            <h2 className="title">For Resources!</h2>
            <form onSubmit={handleSearch} className="form">
              <input 
                type="text" 
                placeholder="Search..." 
                required 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input"
              />
              <button type="submit" className="button">
                Search
              </button>
            </form>
          </section>
        </div>
      </div>

      <section className="section">
        <h2 className="title">NASA's Climate Initiatives</h2>
        <p style={{ marginBottom: '40px' }}>
          Learn about the exciting projects NASA is undertaking to combat climate change.
        </p>
        <ul className="list">
          <li className="list-item">
            <a 
              href="https://climate.nasa.gov/" 
              className="link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              NASA Climate Change Resources
            </a>
          </li>
          <li className="list-item">
            <a 
              href="https://science.nasa.gov/earth/" 
              className="link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Earth NASA Science
            </a>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="title">Weather Data Visualization</h2>
        <CitySelector onCityChange={setSelectedCity} />
        <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Weather Data for {selectedCity.name}</h3>
        {loading && <p>Loading weather data...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && weatherData.length > 0 && (
          <>
            <WeatherChart weatherData={weatherData} timezone={timezone} />
            {/* <WeatherData weatherData={weatherData} timezone={timezone} /> */}
          </>
        )}
        {!loading && !error && weatherData.length === 0 && <p>No data available for the selected city.</p>}
      </section>

      <section className="section">
        <h2 className="title">Get Involved!</h2>
        <form className="form">
          <input 
            type="email" 
            placeholder="Subscribe to updates" 
            required 
            className="input"
          />
          <button type="submit" className="button">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
