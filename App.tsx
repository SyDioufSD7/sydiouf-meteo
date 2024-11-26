import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Regions } from './pages/Regions';
import { Alerts } from './pages/Alerts';
import { WeatherMap } from './pages/WeatherMap';
import { RegionDetail } from './pages/RegionDetail';
import { Articles } from './pages/Articles';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/map" element={<WeatherMap />} />
            <Route path="/map/:regionName" element={<RegionDetail />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;