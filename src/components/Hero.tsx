import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "images/hero1.jpg",
      title: "GREEN ENERGY SOLUTIONS",
      subtitle: "Your trusted partner for solar, water, and electrical installations in The Gambia and Senegal."
    },
    {
      image: "images/hero2.jpg",
      title: "RENEWABLE ENERGY EXPERTS",
      subtitle: "Over 300 successful projects completed since 2019. Providing clean energy solutions across West Africa."
    },
    {
      image: "images/hero3.jpg",
      title: "CLEAN WATER FOR ALL",
      subtitle: "Solar-powered water pumping systems serving over 250,000 people with clean potable water."
    },
    {
      image: "images/hero4.jpg",
      title: "PROFESSIONAL ELECTRICAL SERVICES",
      subtitle: "Licensed and insured electrical contractors with over a decade of experience."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative pt-16 min-h-screen">
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              <ImageWithFallback
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>

            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-white mb-6 text-5xl sm:text-6xl lg:text-7xl">{slide.title}</h1>
                  <p className="text-xl text-gray-200 mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Get a Quote
                    </button>
                    <button
                      onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                      className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}