import { Button } from "@/components/ui/button"

const services = [
  {
    title: "ENCOMBRANTS",
    description: "Évacuation d'encombrants pour particuliers et professionnels",
    image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "NETTOYAGE",
    description: "Nettoyage d'immeubles, bureaux et logements",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "CONTAINERS",
    description: "Rotation et gestion des containers",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "PRESTATIONS SUR DEVIS",
    description: "Désinfection, lavage de vitres, nettoyage de tapis et plus",
    image: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-bilanis-blue mb-12 font-montserrat">
          NOS SERVICES
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button className="w-full gradient-bilanis">En savoir plus</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}