import { Zap, Phone, Mail, MapPin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="bg-green-600 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div> */}
              <img 
                src="/images/ges.png" 
                alt="Green Energy Solutions Logo" 
                style={{ height: "40px", width: "auto" }}
              />
              <span className="text-white">Green Energy Solutions</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for solar, water, and electrical installations in The Gambia and Senegal.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-green-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-green-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-green-400 transition-colors">
                  Our Mission
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-green-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Solar PV Systems</li>
              <li>Water Pumping</li>
              <li>Electrical Installation</li>
              <li>Maintenance & Repairs</li>
              <li>Consultancy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Nuwary Junction, Brusubi Phase 2, The Gambia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400">+220 7656566</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 break-all">greenenergysolutionsgambia@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="https://www.facebook.com/SolutionsGreenEnergy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
         
          <a href="https://kontehgraphics.com"> <p>&copy; {new Date().getFullYear()} Konteh Graphics. All rights reserved.</p></a>
        </div>
      </div>
    </footer>
  );
}
