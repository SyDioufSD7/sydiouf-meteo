import React from 'react';
import { Calendar, User } from 'lucide-react';

export function Articles() {
  const articles = [
    {
      title: "Comprendre la saison des pluies au Sénégal",
      excerpt: "La saison des pluies au Sénégal, également appelée hivernage, est une période cruciale pour l'agriculture...",
      author: "Dr. Fatou Diop",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Impact du changement climatique sur le Sahel",
      excerpt: "Le Sahel fait face à des défis climatiques majeurs qui affectent directement les populations locales...",
      author: "Prof. Amadou Sall",
      date: "2024-03-10",
      image: "https://images.unsplash.com/photo-1561553873-e8491a564fd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Les systèmes de prévision météorologique modernes",
      excerpt: "Les avancées technologiques permettent aujourd'hui des prévisions plus précises...",
      author: "Ing. Marie Ndiaye",
      date: "2024-03-05",
      image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Articles et Actualités</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.date}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}