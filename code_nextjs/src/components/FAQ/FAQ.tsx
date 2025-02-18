import React from 'react';
import FAQItem from './FAQItem';

const faqData = [
  {
    question: "Quelles sont vos zones d'intervention ?",
    answer: "Nous intervenons dans toute la région parisienne (75, 92, 93, 94) et proposons nos services aux particuliers et aux professionnels."
  },
  {
    question: "Proposez-vous des contrats d'entretien régulier ?",
    answer: "Oui, nous proposons des contrats d'entretien personnalisés selon vos besoins, avec des interventions hebdomadaires, bi-mensuelles ou mensuelles."
  },
  {
    question: "Quel est le délai d'intervention pour une urgence ?",
    answer: "Pour les situations d'urgence, nous garantissons une intervention dans les 24h suivant votre appel."
  },
  {
    question: "Vos prestations sont-elles assurées ?",
    answer: "Oui, toutes nos prestations sont couvertes par une assurance professionnelle pour votre tranquillité."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Questions Fréquentes
        </h2>
        
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;