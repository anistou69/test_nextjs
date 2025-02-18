import { Button } from "@/components/ui/button"
import { useState } from "react"

const services = [
  "Lavage de vitres",
  "Débarrassage d'encombrants",
  "Décapage monobrosse",
  "Lavage de poubelles",
  "Remplacement de gardien",
  "Nettoyage de logement vacant"
]

export function QuoteForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  
  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  return (
    <section id="devis" className="py-20 bg-bilanis-lightBlue">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-bilanis-blue mb-12 font-montserrat">
          Demande de Devis
        </h2>
        
        <form className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-4">
              Sélectionnez vos prestations :
            </label>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`service-${index}`}
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                    className="h-4 w-4 text-bilanis-blue focus:ring-bilanis-blue border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`service-${index}`}
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nom
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-bilanis-blue"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-bilanis-blue"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-bilanis-blue h-32"
              required
            ></textarea>
          </div>

          <div className="mt-6">
            <Button type="submit" className="w-full gradient-bilanis">
              Demander un devis
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}