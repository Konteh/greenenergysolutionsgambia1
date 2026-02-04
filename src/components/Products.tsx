import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Products() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1724041875467-3576f20170dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHN5c3RlbXxlbnwxfHx8fDE3Njk0NzAyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Solar Photovoltaic (PV) Systems",
      description: "Complete solar electricity systems for residential and commercial use. High-efficiency panels with inverters and battery storage options."
    },
    {
      image: "https://images.unsplash.com/photo-1561115867-be8460fbebfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdhdGVyJTIwcHVtcGluZ3xlbnwxfHx8fDE3NjM5ODIyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Solar Water Pumping Systems",
      description: "Advanced solar-powered water pumping solutions for irrigation, borehole drilling, and clean drinking water supply."
    },
    {
      image: "https://images.unsplash.com/photo-1688124968558-974cf707348b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHN0cmVldCUyMGxpZ2h0fGVufDF8fHx8MTc2OTQ3MDIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Solar Street Lighting",
      description: "Energy-efficient solar street lights with automatic sensors, perfect for roads, parking lots, and public spaces."
    },
    {
      image: "https://images.unsplash.com/photo-1612367662740-5cb9170a0768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdhdGVyJTIwaGVhdGVyfGVufDF8fHx8MTc2OTQ3MDIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Solar Water Heaters",
      description: "Eco-friendly solar water heating systems for residential and commercial applications, reducing energy costs."
    },
    {
      image: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjM5Nzg4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Solar Products & Equipment",
      description: "High-quality solar panels, inverters, batteries, charge controllers, and accessories from trusted manufacturers."
    },
    {
      image: "https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGZpZWxkfGVufDF8fHx8MTc2Mzk1MDY2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Solar Hybrid Systems",
      description: "Combined solar-grid systems with automatic switching, ensuring uninterrupted power supply for critical operations."
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality solar products designed to meet your energy needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
