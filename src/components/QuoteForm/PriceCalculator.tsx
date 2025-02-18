import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface Service {
  name: string;
  basePrice: number;
}

const services: Service[] = [
  { name: "Lavage de vitres", basePrice: 50 },
  { name: "Débarrassage d'encombrants", basePrice: 150 },
  { name: "Décapage monobrosse", basePrice: 200 },
  { name: "Lavage de poubelles", basePrice: 30 },
  { name: "Remplacement de gardien", basePrice: 180 },
  { name: "Nettoyage de logement vacant", basePrice: 250 }
];

const PriceCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [surface, setSurface] = useState<number>(0);

  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => {
      const servicePrice = services.find(s => s.name === service)?.basePrice || 0;
      return total + servicePrice * Math.max(1, Math.floor(surface / 50));
    }, 0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <div className="flex items-center mb-4">
        <Calculator className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold">Calculateur de Prix Estimatif</h3>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Surface approximative (m²)
        </label>
        <input
          type="number"
          min="0"
          value={surface}
          onChange={(e) => setSurface(Number(e.target.value))}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sélectionnez les services
        </label>
        {services.map((service) => (
          <label key={service.name} className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={selectedServices.includes(service.name)}
              onChange={(e) => {
                setSelectedServices(prev =>
                  e.target.checked
                    ? [...prev, service.name]
                    : prev.filter(s => s !== service.name)
                );
              }}
              className="mr-2"
            />
            <span>{service.name}</span>
          </label>
        ))}
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded-md">
        <p className="text-lg font-semibold">
          Estimation: {calculateTotal()}€ TTC*
        </p>
        <p className="text-sm text-gray-500 mt-2">
          *Prix indicatif sujet à variation selon les spécificités du chantier
        </p>
      </div>
    </div>
  );
};

export default PriceCalculator;