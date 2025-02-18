import { Sparkles, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-bilanis-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 text-bilanis-lime" />
              <span className="ml-2 text-lg font-bold">Bilanis Propreté</span>
            </div>
            <p className="text-gray-300">
              Solutions professionnelles de nettoyage pour entreprises et particuliers
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-300 hover:text-white">Accueil</a></li>
              <li><a href="#presentation" className="text-gray-300 hover:text-white">Présentation</a></li>
              <li><a href="#prestations" className="text-gray-300 hover:text-white">Prestations</a></li>
              <li><a href="#devis" className="text-gray-300 hover:text-white">Devis</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-bilanis-lime mr-2" />
                <span className="text-gray-300">01 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-bilanis-lime mr-2" />
                <span className="text-gray-300">contact@bilanis.fr</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-bilanis-lime mr-2" />
                <span className="text-gray-300">123 Avenue de la Propreté, 75000 Paris</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bilanis Propreté. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}