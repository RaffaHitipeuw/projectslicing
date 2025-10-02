const Gallery = () => {
  const galleryLogos = [
    {
      src: "/work1.jpg",
      alt: "Work 1",
    },
    {
      src: "/work2.jpg",
      alt: "Work 2",
    },
    {
      src: "/work3.jpg",
      alt: "Work 3",
    },
    {
      src: "/work4.jpg",
      alt: "Work 4",
    },
    {
      src: "/work5.png",
      alt: "Work 5",
    },
    {
      src: "/work6.png", // ini png, jadi tulisannya beda
      alt: "Work 6",
    },
  ];

  return (
    <section className="px-6 md:px-32 py-16 bg-maroon text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryLogos.map((logo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
