import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Marie Dubois",
    company: "Cabinet d'avocats XYZ",
    comment: "Service impeccable et équipe très professionnelle. Je recommande vivement pour l'entretien de nos bureaux.",
    rating: 5
  },
  {
    name: "Pierre Martin",
    company: "Résidence Les Jardins",
    comment: "Excellent travail pour le remplacement de notre gardien. Réactivité et qualité de service au rendez-vous.",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    company: "Agence Immobilière ABC",
    comment: "Très satisfaite du service de nettoyage des logements vacants. Rapide et efficace.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Avis de nos Clients
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;