// components/WeatherData.js

"use client";

import React from 'react';
import { utcToZonedTime } from 'date-fns-tz';

const WeatherData = ({ weatherData, timezone }) => {
  if (!weatherData || weatherData.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h2>Detailed Weather Data</h2>
      {weatherData.map((entry, index) => {
        let formattedDate = 'N/A';
        if (entry.validdate) {
          try {
            const zonedDate = utcToZonedTime(entry.validdate, timezone);
            formattedDate = zonedDate.toLocaleString([], { 
              year: 'numeric', month: 'short', day: 'numeric', 
              hour: '2-digit', minute: '2-digit' 
            });
          } catch (e) {
            console.error(`Error formatting date for entry ${index}:`, e);
          }
        }

        return (
          <div key={index} style={{ marginBottom: '10px' }}>
            <p><strong>Time:</strong> {formattedDate}</p>
            <p><strong>Temperature:</strong> {entry['t_2m:C'] ?? 'N/A'} °C</p>
            <p><strong>Precipitation:</strong> {entry['precip_1h:mm'] ?? 'N/A'} mm</p>
            <p><strong>Wind Speed:</strong> {entry['wind_speed_10m:ms'] ?? 'N/A'} m/s</p>
            <p><strong>Humidity:</strong> {entry['relative_humidity_2m:p'] ?? 'N/A'}%</p>
            {/* Since 'pressure_surface:hPa' was removed, comment out or remove this line */}
            {/* <p><strong>Pressure:</strong> {entry['pressure_surface:hPa']} hPa</p> */}
            <p><strong>Cloud Cover:</strong> {entry['cloud_cover:p'] ?? 'N/A'}%</p>
            <p><strong>UV Index:</strong> {entry['uv:idx'] ?? 'N/A'}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default WeatherData;