import { CheckCircle, Award, Users, Shield, Wallet, Wrench, Truck, Tag } from "lucide-react";

export function WhyChooseUs() {
  const guarantees = [
    {
      icon: Users,
      title: "Experienced Professionals",
      description: "Run by electrical engineers and solar energy experts with over a decade of experience"
    },
    {
      icon: Award,
      title: "Quality Work",
      description: "High quality products from reliable manufacturers ensuring maximum efficiency"
    },
    {
      icon: CheckCircle,
      title: "Dedicated & Organized Team",
      description: "Professional team committed to delivering excellence in every project"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind"
    }
  ];

  const advantages = [
    {
      icon: Wallet,
      title: "Installment Facility",
      description: "Flexible payment options so everyone can afford solar electricity"
    },
    {
      icon: Wrench,
      title: "Warranty & Maintenance",
      description: "Proper customer care with comprehensive warranty, maintenance and repair services"
    },
    {
      icon: Truck,
      title: "Delivery Services",
      description: "Convenient delivery services for all our products"
    },
    {
      icon: Tag,
      title: "Affordable Pricing",
      description: "Competitive prices with attractive discounts for our customers"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our professionalism and expertise set us apart. We offer the best solar energy and electrical 
            solutions to boost your efficiency, productivity, and safety.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-gray-900 mb-8 text-center">Our Guarantees</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gray-900 mb-8 text-center">Our Competitive Advantages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
