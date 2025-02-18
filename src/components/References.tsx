const references = [
  {
    name: "Immobilière Exemple",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Bureau & Co",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Centre Commercial Grand Place",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
]

export function References() {
  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-bilanis-blue mb-12 font-montserrat">
          Ils nous font confiance
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <div key={index} className="text-center">
              <img
                src={ref.logo}
                alt={ref.name}
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-lg shadow-lg"
              />
              <p className="text-lg font-semibold text-bilanis-blue">{ref.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}