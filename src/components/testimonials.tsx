import { Star } from "lucide-react"

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
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-bilanis-blue mb-12 font-montserrat">
          Avis de nos Clients
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-bilanis-lime fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <div>
                <p className="font-semibold text-bilanis-blue">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}