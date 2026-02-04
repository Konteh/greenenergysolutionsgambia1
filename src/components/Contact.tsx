import { MapPin, Phone, Mail, Facebook, Send } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to switch to clean energy? Contact us for all your solar and electrical needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-lg h-fit">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Nuwary Junction, Brusubi Phase 2<br />
                    The Gambia, West Africa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-lg h-fit">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+220 7656566</p>
                  <p className="text-gray-600">+220 7653364</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-lg h-fit">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">greenenergysolutionsgambia@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-lg h-fit">
                  <Facebook className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Facebook</h4>
                  <a 
                    href="https://www.facebook.com/SolutionsGreenEnergy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                  >
                    www.facebook.com/SolutionsGreenEnergy
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1751486289945-989724789188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjB3b3JrfGVufDF8fHx8MTc2Mzk4MjIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Electrical engineering work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="+220 1234567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
