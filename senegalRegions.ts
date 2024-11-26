export interface Region {
  name: string;
  capital: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
}

export const senegalRegions: Region[] = [
  {
    name: "Dakar",
    capital: "Dakar",
    temperature: 28,
    humidity: 75,
    windSpeed: 15,
    condition: "Ensoleillé"
  },
  {
    name: "Saint-Louis",
    capital: "Saint-Louis",
    temperature: 26,
    humidity: 70,
    windSpeed: 18,
    condition: "Partiellement nuageux"
  },
  {
    name: "Thiès",
    capital: "Thiès",
    temperature: 29,
    humidity: 65,
    windSpeed: 12,
    condition: "Ensoleillé"
  },
  {
    name: "Ziguinchor",
    capital: "Ziguinchor",
    temperature: 31,
    humidity: 80,
    windSpeed: 10,
    condition: "Orageux"
  },
  {
    name: "Diourbel",
    capital: "Diourbel",
    temperature: 32,
    humidity: 60,
    windSpeed: 14,
    condition: "Ensoleillé"
  },
  {
    name: "Kaolack",
    capital: "Kaolack",
    temperature: 33,
    humidity: 55,
    windSpeed: 16,
    condition: "Clair"
  },
  {
    name: "Kolda",
    capital: "Kolda",
    temperature: 30,
    humidity: 75,
    windSpeed: 8,
    condition: "Partiellement nuageux"
  },
  {
    name: "Louga",
    capital: "Louga",
    temperature: 31,
    humidity: 50,
    windSpeed: 20,
    condition: "Venteux"
  },
  {
    name: "Fatick",
    capital: "Fatick",
    temperature: 30,
    humidity: 65,
    windSpeed: 12,
    condition: "Ensoleillé"
  },
  {
    name: "Matam",
    capital: "Matam",
    temperature: 35,
    humidity: 45,
    windSpeed: 15,
    condition: "Très chaud"
  }
];