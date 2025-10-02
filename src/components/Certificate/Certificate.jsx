const Certificate = () => {
  const certificates = [
    { src: "/git.png", title: "Git Certificate" },
    { src: "/blender.png", title: "Blender Certificate" },
    { src: "/react.png", title: "React Certificate" },
  ];

  return (
    <section className="px-6 md:px-32 py-16 bg-maroon text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
        My Certificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#800000] shadow-lg rounded-lg p-4 hover:scale-105 transition-transform"
          >
            <img
              src={cert.src}
              alt={cert.title}
              className="w-full h-auto rounded-md"
            />
            <p className="mt-2 text-sm text-white">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
