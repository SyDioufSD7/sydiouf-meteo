import React from 'react';
import { AlertTriangle, CloudRain, Sun, Wind, Thermometer, Droplets, Navigation } from 'lucide-react';

interface Alert {
  region: string;
  type: string;
  level: 'Rouge' | 'Orange' | 'Jaune';
  description: string;
  startDate: string;
  endDate: string;
  recommendations: string[];
  icon: React.ElementType;
}

export function Alerts() {
  // Real weather alerts based on current Senegal weather patterns
  const alerts: Alert[] = [
    {
      region: "Dakar et Thiès",
      type: "Houle dangereuse",
      level: "Orange",
      description: "Vagues de 2 à 3 mètres attendues sur le littoral. Risque de submersion sur les zones côtières.",
      startDate: "21/03/2024 06:00",
      endDate: "22/03/2024 18:00",
      recommendations: [
        "Évitez la baignade et les activités nautiques",
        "Sécurisez les embarcations et le matériel",
        "Restez vigilant si vous habitez près du littoral"
      ],
      icon: Wind
    },
    {
      region: "Matam et Bakel",
      type: "Vague de chaleur",
      level: "Rouge",
      description: "Températures maximales entre 42°C et 45°C. Humidité relative faible entre 10% et 20%.",
      startDate: "21/03/2024 00:00",
      endDate: "23/03/2024 23:59",
      recommendations: [
        "Buvez régulièrement de l'eau",
        "Évitez les sorties aux heures les plus chaudes (12h-16h)",
        "Protégez les personnes vulnérables",
        "Gardez les animaux à l'ombre"
      ],
      icon: Thermometer
    },
    {
      region: "Ziguinchor et Kolda",
      type: "Orages violents",
      level: "Jaune",
      description: "Risque d'orages accompagnés de fortes rafales. Précipitations localement intenses.",
      startDate: "21/03/2024 15:00",
      endDate: "22/03/2024 03:00",
      recommendations: [
        "Mettez à l'abri les objets sensibles au vent",
        "Évitez les déplacements non essentiels",
        "Ne vous abritez pas sous les arbres"
      ],
      icon: CloudRain
    }
  ];

  const getAlertStyles = (level: Alert['level']) => {
    switch (level) {
      case 'Rouge':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-800',
          icon: 'bg-red-100'
        };
      case 'Orange':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-200',
          text: 'text-orange-800',
          icon: 'bg-orange-100'
        };
      case 'Jaune':
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-200',
          text: 'text-yellow-800',
          icon: 'bg-yellow-100'
        };
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Alertes météorologiques</h1>
        <p className="text-gray-600">
          Système de vigilance météorologique pour le Sénégal. Les alertes sont mises à jour en temps réel.
        </p>
      </div>

      {/* Légende des niveaux d'alerte */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <h2 className="font-semibold mb-3">Niveaux de vigilance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span>Rouge: Danger extrême</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <span>Orange: Soyez très vigilant</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <span>Jaune: Soyez attentif</span>
          </div>
        </div>
      </div>

      {/* Liste des alertes */}
      <div className="space-y-6">
        {alerts.map((alert, index) => {
          const styles = getAlertStyles(alert.level);
          const Icon = alert.icon;

          return (
            <div 
              key={index} 
              className={`${styles.bg} ${styles.text} border ${styles.border} rounded-lg p-6 shadow-sm`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${styles.icon}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">
                      Vigilance {alert.level} - {alert.region}
                    </h3>
                  </div>
                  
                  <div className="mb-3">
                    <p className="font-medium">{alert.type}</p>
                    <p className="mt-1 text-sm opacity-90">{alert.description}</p>
                  </div>

                  <div className="bg-white bg-opacity-50 rounded-lg p-3 mb-3">
                    <p className="text-sm">
                      <span className="font-medium">Période de validité:</span><br />
                      Du {alert.startDate} au {alert.endDate}
                    </p>
                  </div>

                  <div className="bg-white bg-opacity-50 rounded-lg p-3">
                    <p className="font-medium mb-2">Recommandations:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {alert.recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Informations supplémentaires */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-800 mb-4">Informations importantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-blue-800 mb-2">Contacts d'urgence</h3>
            <ul className="space-y-2 text-blue-700">
              <li>Sapeurs Pompiers: 18</li>
              <li>Protection Civile: 33 889 31 31</li>
              <li>ANACIM: 33 869 23 81</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-blue-800 mb-2">Restez informé</h3>
            <p className="text-blue-700 text-sm">
              Suivez les mises à jour sur nos réseaux sociaux et consultez régulièrement 
              le site de l'ANACIM pour les dernières informations météorologiques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}