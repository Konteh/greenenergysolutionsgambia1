import { ImageWithFallback } from "./figma/ImageWithFallback";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function Gallery() {
  const galleryImages = [
    {
      url: "images/img6.jpeg",
      // title: "Residential Solar Installation"
    },
    {
     url: "images/img11.jpeg",
      // title: "Residential Solar Installation"
    },
    {
     url: "images/img2.jpeg",
      // title: "Residential Solar Installation"
    },
    {
      url: "images/img77.jpg",
      title: "Expert Installation Team"
    },
    {
      url: "images/img91.jpg",
      title: "Solar Farm Installation"
    },
    {
      url: "images/img433.jpeg",
      title: "Electrical Panel Work"
    },
    {
      url: "images/img321.jpg",
      title: "Solar Water Pumping System"
    },
    {
      url: "images/img122.jpg",
      title: "Community Solar Project"
    },
    {
      url: "images/img44.jpeg",
      title: "Community Solar Project"
    },
    // {
    //   url: "https://images.unsplash.com/photo-1688124968558-974cf707348b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHN0cmVldCUyMGxpZ2h0fGVufDF8fHx8MTc2OTQ3MDIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   title: "Solar Street Lighting"
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1685023620523-5855dd9d05c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB3YXRlciUyMHByb2plY3R8ZW58MXx8fHwxNzY5NDcwMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   title: "Community Water Access"
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1767514536575-82aaf8b0afc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd29yayUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3Njk0NzAzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   title: "Electrical Construction Work"
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3Njk0MTU2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   title: "Solar Energy Installation"
    // }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 mb-4">Project Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our completed projects across The Gambia and Senegal
          </p>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1.5rem">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4">{image.title}</p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}