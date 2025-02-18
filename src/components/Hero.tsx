import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
              SERVICE DE ROTATION DES CONTENEURS
            </h1>
            <p className="text-xl text-white mb-8 opacity-90">
              Optimisez votre gestion des déchets avec notre service professionnel de rotation des conteneurs.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gradient-bilanis">
                DEMANDER UN DEVIS
              </Button>
              <Button size="lg" variant="outline" className="bg-white">
                EN SAVOIR PLUS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}