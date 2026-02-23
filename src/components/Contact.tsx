import { MapPin, Phone, Mail, Facebook, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { send } from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim()) {
      toast.error("Name Required", {
        description: "Please enter your name.",
        duration: 3000
      });
      return;
    }
    
    if (!formData.email.trim()) {
      toast.error("Email Required", {
        description: "Please enter your email address.",
        duration: 3000
      });
      return;
    }
    
    if (!formData.message.trim()) {
      toast.error("Message Required", {
        description: "Please enter your message.",
        duration: 3000
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Configuration Error", {
        description: "EmailJS is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env",
        duration: 5000
      });
      return;
    }

    setSending(true);

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    console.log("Sending email with params:", templateParams);

    try {
      await send(serviceId, templateId, templateParams, publicKey);
      toast.success("Message Sent!", {
        description: "Thank you for your message! We will get back to you soon.",
        duration: 4000
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Send Failed", {
        description: "Sorry, something went wrong sending your message. Please try again later.",
        duration: 5000
      });
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Toaster position="top-center" richColors />
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

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-lg h-fit">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+220 7656566</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-lg h-fit">
                    <FaWhatsapp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">WhatsApp</h4>
                    <p className="text-gray-600">+220 7653364</p>
                  </div>
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
                src="images/hero3.jpg"
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
                  placeholder="Fatou Touray"
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
                  placeholder="marketing@greenenergysolutions.com"
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
                  placeholder="+220 7656566"
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
                disabled={sending}
                className={`w-full bg-green-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${sending ? 'opacity-70 cursor-not-allowed hover:bg-green-600' : 'hover:bg-green-700'}`}
              >
                <Send className="h-5 w-5" />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
