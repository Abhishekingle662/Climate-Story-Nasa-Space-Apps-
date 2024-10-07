// components/WeatherChart.js

"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { utcToZonedTime } from 'date-fns-tz';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const WeatherChart = ({ weatherData, timezone }) => {
  const data = {
    labels: weatherData.map(entry => {
      if (entry.validdate) {
        const zonedDate = utcToZonedTime(entry.validdate, timezone);
        return zonedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
      return 'N/A';
    }),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: weatherData.map(entry => entry['t_2m:C'] ?? 0),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Wind Speed (m/s)',
        data: weatherData.map(entry => entry['wind_speed_10m:ms'] ?? 0),
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
      {
        label: 'Precipitation (mm)',
        data: weatherData.map(entry => entry['precip_1h:mm'] ?? 0),
        borderColor: 'rgba(255,159,64,1)',
        fill: false,
      },
      {
        label: 'Humidity (%)',
        data: weatherData.map(entry => entry['relative_humidity_2m:p'] ?? 0),
        borderColor: 'rgba(255,99,132,1)',
        fill: false,
      },
      {
        label: 'UV Index',
        data: weatherData.map(entry => entry['uv:idx'] ?? 0),
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weather Parameters Over Time',
      },
    },
    scales: {
      x: {
        type: 'category',
        display: true,
        title: {
          display: true,
          text: 'Time',
        },
        ticks: {
          maxTicksLimit: 10,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeatherChart;