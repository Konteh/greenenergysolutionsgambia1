import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Assan Sowe",
      role: "Co Founder & Director of Finance",
      image: "images/teams/ceo2.jpg",
      description: "Over 12 years of experience in solar energy systems and electrical engineering"
    },
    {
      name: "Cherno Sowe",
      role: "Co Founder & Director of Technical Department",
      image: "images/teams/cherno2.jpg",
      description: "Specializes in project coordination and client relations across West Africa"
    },
    {
      name: "Kaddy Darboe",
      role: "Admin Officer",
      image: "images/teams/kaddy2.jpg",
      description: "Expert in administrative tasks related to solar energy projects and client support"
    },
    {
      name: "Alieu Kandeh",
      role: "Sale Person",
      image: "images/teams/alieu2.jpg",
      description: "Certified electrical contractor with extensive commercial experience"
    },
    {
      name: "Muhammed Makalo",
      role: "Lead Technician",
      image: "images/teams/makalo.jpg",
      description: "Certified electrical contractor with extensive commercial experience"
    },
    {
      name: "Halima Jallow",
      role: "Technician",
      image: "images/teams/halima.jpg",
      description: "Certified electrical technician with expertise in solar installations"
    },
    {
      name: "Dawda Jallow",
      role: "Technician",
      image: "images/teams/dawda.jpg",
      description: "Certified electrical technician with expertise in solar installations"
    },
    
    {
      name: "Momodou Marra",
      role: "Technician",
      image: "images/teams/marra.jpg",
      description: "Certified electrical contractor with extensive commercial experience"
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of experienced professionals committed to delivering excellence 
            in solar energy and electrical solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]" style={{ aspectRatio: '3/4' }}>
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Mail className="h-4 w-4 text-green-600" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Linkedin className="h-4 w-4 text-green-600" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
