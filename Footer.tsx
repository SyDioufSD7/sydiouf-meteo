import React from 'react';
import { Cloud } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Météo Sénégal</h3>
            </div>
            <p className="text-gray-300">Service météorologique national du Sénégal fournissant des prévisions précises et fiables.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: contact@meteosenegal.sn</p>
            <p className="text-gray-300">Tél: 70 545 56 76</p>
            <p className="text-gray-300">Dakar, Sénégal</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-yellow-200">Mentions légales</a></li>
              <li><a href="#" className="hover:text-yellow-200">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-yellow-200">Plan du site</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}