import React from 'react';
import { AlertBanner } from '../components/alerts/AlertBanner';
import { WeatherCard } from '../components/weather/WeatherCard';
import { ForecastCard } from '../components/weather/ForecastCard';
import { AirQualityIndicator } from '../components/weather/AirQualityIndicator';
import { WeatherHistory } from '../components/weather/WeatherHistory';
import { senegalRegions } from '../data/senegalRegions';

export function Home() {
  const featuredRegions = senegalRegions.slice(0, 3);
  
  // Sample forecast data
  const forecast = [
    { day: 'Lundi', temperature: 28, condition: 'Ensoleillé' },
    { day: 'Mardi', temperature: 27, condition: 'Nuageux' },
    { day: 'Mercredi', temperature: 29, condition: 'Ensoleillé' },
    { day: 'Jeudi', temperature: 26, condition: 'Pluvieux' },
    { day: 'Vendredi', temperature: 28, condition: 'Nuageux' }
  ];

  // Sample history data
  const historyData = [
    { date: '15/03', temperature: 28 },
    { date: '16/03', temperature: 29 },
    { date: '17/03', temperature: 27 },
    { date: '18/03', temperature: 26 },
    { date: '19/03', temperature: 28 },
    { date: '20/03', temperature: 30 }
  ];

  return (
    <div>
      <AlertBanner 
        type="warning"
        message="Vigilance orange : Fortes pluies attendues sur la région de Dakar"
      />
      
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Bienvenue sur Météo Sénégal</h1>
        <p className="text-xl text-gray-600 mb-8">
          Votre source fiable pour les prévisions météorologiques au Sénégal
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRegions.map((region) => (
            <WeatherCard
              key={region.name}
              city={region.capital}
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Prévisions sur 5 jours</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <ForecastCard key={index} {...day} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <AirQualityIndicator aqi={45} pollutant="PM2.5" />
        <WeatherHistory data={historyData} />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bulletin météorologique</h2>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600">
            Aujourd'hui, le Sénégal connaît des conditions météorologiques variables. 
            Les régions côtières bénéficient d'un temps clément avec des températures modérées, 
            tandis que l'intérieur du pays connaît des températures plus élevées.
          </p>
        </div>
      </section>
    </div>
  );
}