import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            {/* <div className="bg-green-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div> */}
            {/* <span className="text-green-700">Green Energy Solutions</span> */}
            <img 
                src="/images/ges.png" 
                alt="Green Energy Solutions Logo" 
                style={{ height: "40px", width: "auto" }}
              />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="text-gray-700 hover:text-green-600 transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-gray-700 hover:text-green-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              Products
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              Services
            </button>
            <button onClick={() => scrollToSection("gallery")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}