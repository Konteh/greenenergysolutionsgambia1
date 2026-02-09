import { useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Partner data with image paths - add your partner logos in the images folder
  const partners = [
    { name: "Solar Energy Africa", imagePath: "images/partners/brusels.jpeg" },
    { name: "Solar Energy Africa", imagePath: "images/partners/sebde.jpeg" },
    { name: "Solar Energy Africa", imagePath: "images/partners/behati.png" },
    { name: "Solar Energy Africa", imagePath: "images/partners/ports.jpg" },
    { name: "Solar Energy Africa", imagePath: "images/partners/nema.png" },
    { name: "Solar Energy Africa", imagePath: "images/partners/kg5.jpg" },
    { name: "Solar Energy Africa", imagePath: "images/partners/imf.jpeg" },
    { name: "Solar Energy Africa", imagePath: "images/partners/unique.png" },
    { name: "Solar Energy Africa", imagePath: "images/partners/UNCDF.png" },
    { name: "Solar Energy Africa", imagePath: "images/partners/Discoverytours.png" },
    { name: "Solar Energy Africa", imagePath: "images/partners/adc.jpeg" },
    
  ];

  // Duplicate the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed as needed

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when we've scrolled through half the content
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-green-600 mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations across West Africa
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling container */}
          <div 
            ref={scrollRef}
            className="flex gap-12 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-40 h-24 bg-white rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-200"
              >
                <ImageWithFallback
                  src={partner.imagePath}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
