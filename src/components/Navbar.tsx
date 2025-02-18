import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "./ui/button"

const menuItems = [
  { title: "QUI SOMMES NOUS ?", href: "#about" },
  { title: "NOS SERVICES", href: "#services" },
  { title: "NEWS & ACTU", href: "#news" },
  { title: "CARRIÈRE", href: "#career" },
  { title: "NOS RÉFÉRENCES", href: "#references" },
  { title: "CONTACT", href: "#contact" }
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-bilanis-blue" />
              <span className="text-2xl font-bold text-bilanis-blue">Bilanis</span>
              <span className="text-bilanis-green">Propreté</span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-bilanis-blue hover:text-bilanis-green font-montserrat font-semibold"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 text-bilanis-blue hover:text-bilanis-green font-montserrat font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}