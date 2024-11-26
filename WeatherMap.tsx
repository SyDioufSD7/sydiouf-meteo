import React from 'react';

export function WeatherMap() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 h-[400px]">
      <div className="relative h-full">
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-4.658203125,41.31082267209039,8.61328125,51.17934297928927&amp;layer=mapnik"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}