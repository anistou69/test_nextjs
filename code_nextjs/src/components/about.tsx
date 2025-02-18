import { Award, Users, Clock } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-bilanis-lightBlue">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-bilanis-blue mb-12 font-montserrat">
          Notre Entreprise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Award className="h-12 w-12 text-bilanis-lime mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-bilanis-blue">Expertise</h3>
            <p className="text-gray-600">
              Plus de 10 ans d'expérience dans le secteur du nettoyage professionnel
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-bilanis-lime mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-bilanis-blue">Équipe Qualifiée</h3>
            <p className="text-gray-600">
              Personnel formé et expérimenté pour des prestations de qualité
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Clock className="h-12 w-12 text-bilanis-lime mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-bilanis-blue">Disponibilité</h3>
            <p className="text-gray-600">
              Intervention 7j/7 pour répondre à vos besoins urgents
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Bilanis Propreté s'engage à fournir des prestations de nettoyage de haute qualité
            pour les professionnels et les particuliers. Notre mission est de créer des
            environnements propres et sains pour nos clients.
          </p>
        </div>
      </div>
    </section>
  )
}