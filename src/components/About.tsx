import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-green-600 mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              Green Energy Solutions is a high-tech solar, water and electricity installation and maintenance 
              company based in Nuwary Junction, Brusubi Phase 2, The Gambia, West Africa.
            </p>
            <p className="text-gray-700 mb-6">
              We focus on the present energy crisis and promotion of green energy in The Gambia and Senegal. 
              Our service works on installation and maintenance of solar energy mainly in all parts of the country. 
              By promoting renewable energy, we limit the use of non-renewable energy, creating an environmentally 
              friendly zone for everyone.
            </p>
            <p className="text-gray-700 mb-6">
              Since our inception in May 2019, we have successfully carried out more than 300 projects on both 
              photovoltaic and borehole drilling systems in The Gambia and Senegal, providing clean potable water 
              for more than 250,000 inhabitants.
            </p>
            <p className="text-gray-700">
              Our latest water pumping system can pump more than 60,000 liters per day, meeting the demands 
              and expectations of our customers.
            </p>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="images/about2.jpg"
              alt="Renewable energy in Africa"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-8 rounded-lg shadow-xl">
              <div className="text-4xl mb-2">300+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
