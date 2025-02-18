import React, { useState } from 'react';
import { validateEmail, validatePhone, validatePostalCode } from '../../utils/validation';
import ProgressBar from './ProgressBar';
import Calendar from './Calendar';
import PriceCalculator from './PriceCalculator';

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    message: '',
    services: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!validateEmail(formData.email)) {
      alert('Email invalide');
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert('Numéro de téléphone invalide');
      return;
    }
    if (!validatePostalCode(formData.postalCode)) {
      alert('Code postal invalide');
      return;
    }

    // Envoi du formulaire (à implémenter)
    console.log('Formulaire envoyé:', formData);
  };

  return (
    <section id="devis" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Demande de Devis
        </h2>

        <ProgressBar currentStep={currentStep} totalSteps={3} />
        <PriceCalculator />
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 w-full"
              >
                Suivant
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <Calendar />
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 w-full"
              >
                Suivant
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 w-full mt-2"
              >
                Retour
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Message complémentaire
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-2 border rounded-md h-32"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 w-full"
              >
                Envoyer la demande
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 w-full mt-2"
              >
                Retour
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;