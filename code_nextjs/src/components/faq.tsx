import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "Quelles sont vos zones d'intervention ?",
    answer: "Nous intervenons dans toute la région parisienne (75, 92, 93, 94) et proposons nos services aux particuliers et aux professionnels."
  },
  {
    question: "Proposez-vous des contrats d'entretien régulier ?",
    answer: "Oui, nous proposons des contrats d'entretien personnalisés selon vos besoins, avec des interventions hebdomadaires, bi-mensuelles ou mensuelles."
  },
  {
    question: "Quel est le délai d'intervention pour une urgence ?",
    answer: "Pour les situations d'urgence, nous garantissons une intervention dans les 24h suivant votre appel."
  },
  {
    question: "Vos prestations sont-elles assurées ?",
    answer: "Oui, toutes nos prestations sont couvertes par une assurance professionnelle pour votre tranquillité."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-bilanis-lightBlue">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-bilanis-blue mb-12 font-montserrat">
          Questions Fréquentes
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-bilanis-blue">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-bilanis-lime" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-bilanis-lime" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}