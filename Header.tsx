import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Menu, Search, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Cloud className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Météo Sénégal</h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/regions" className="hover:text-blue-100">Régions</Link></li>
                <li><Link to="/alerts" className="hover:text-blue-100">Alertes</Link></li>
                <li><Link to="/map" className="hover:text-blue-100">Carte</Link></li>
                <li><Link to="/articles" className="hover:text-blue-100">Articles</Link></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 cursor-pointer hover:text-blue-100" />
              <Bell className="h-5 w-5 cursor-pointer hover:text-blue-100" />
            </div>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}