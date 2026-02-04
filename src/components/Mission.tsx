import { Target, Zap, Droplets, Sprout } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <ImageWithFallback
              src="images/mission.jpg"
              alt="Solar water pumping system"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
              <Target className="h-5 w-5 text-green-600" />
              <span className="text-green-700">Our Mission</span>
            </div>
            
            <h2 className="text-gray-900 mb-6">Creating Opportunities & Sustainable Development</h2>
            
            <p className="text-gray-700 mb-8">
              Green Energy Solutions' ultimate goal is to create a space for youths of The Gambia and Senegal 
              in the solar energy sector, creating employment opportunities in the process, whilst playing a 
              major role in the Three-Key-Sectors for development:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-lg h-fit">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">Electricity</h4>
                  <p className="text-gray-600">Providing reliable and sustainable solar electricity solutions across the region</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-lg h-fit">
                  <Droplets className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">Water</h4>
                  <p className="text-gray-600">Ensuring access to clean potable water through solar-powered pumping systems</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-lg h-fit">
                  <Sprout className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">Food Production</h4>
                  <p className="text-gray-600">Supporting agricultural projects through solar-powered irrigation systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
