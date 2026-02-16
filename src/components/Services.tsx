import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      image: "images/services/solar-installation.jpeg",
      title: "Solar Installation Services",
      description: "Professional installation of solar PV systems, water pumping systems, and street lights with warranty coverage."
    },
    {
      image: "images/services/maintenance.jpg",
      title: "Maintenance & Repairs",
      description: "Comprehensive maintenance and repair services for solar systems, electrical installations, and components."
    },
    {
      image: "images/services/electrical-contracting.jpeg",
      title: "Electrical Contracting",
      description: "Licensed electrical contractor services for commercial and residential electrical installations."
    },
    {
      image: "images/services/planning.jpg",
      title: "Project Planning & Design",
      description: "Expert electrical project planning, design, and implementation services tailored to your requirements."
    },
    {
      image: "images/borehole.jpeg",
      title: "Borehole Drilling",
      description: "Professional borehole drilling services with solar-powered water pumping installations for sustainable water access."
    },
    {
      image: "images/services/consultancy.jpg",
      title: "Energy Consultancy",
      description: "Professional consultation services for renewable energy solutions, energy audits, and system optimization."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive energy solutions delivered by experienced professionals across West Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
