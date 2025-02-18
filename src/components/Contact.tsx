import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "./ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-bilanis-lightBlue">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-bilanis-blue mb-12 font-montserrat">
          Contactez-nous
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-bilanis-blue">Nos Coordonnées</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-bilanis-lime mr-3" />
                <span className="text-gray-600">01 23 45 67 89</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-bilanis-lime mr-3" />
                <span className="text-gray-600">contact@bilanis.fr</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-bilanis-lime mr-3" />
                <span className="text-gray-600">123 Avenue de la Propreté, 75000 Paris</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-bilanis-blue">Envoyez-nous un message</h3>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-bilanis-blue"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-bilanis-blue"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-bilanis-blue h-32"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full gradient-bilanis">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}