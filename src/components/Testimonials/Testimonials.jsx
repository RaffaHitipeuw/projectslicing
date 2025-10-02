const Testimonials = () => {
  return (
    <section className="bg-maroon pb-[150px]">
      <section className="py-[150px] text-center px-6">
        <h1 className="font-Josefin text-white font-bold text-[20px]">Testimonials</h1>
        <h1 className="font-Josefin text-white font-bold text-[40px] md:text-[60px]">
          Read what others <br /> say about us
        </h1>
      </section>
      <section className="flex justify-center items-center bg-[#680000] px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#800000] rounded-lg p-6 max-w-xs text-center text-white shadow-lg">
            <div className="flex justify-center">
              <img
                src="orang1.png"
                alt="profile"
                className="w-24 h-24 rounded-full border-4 border-[#680000] -mt-16 bg-white"
              />
            </div>
            <h1 className="mt-4 font-bold text-lg tracking-wide">RON WILLIAMS</h1>
            <p className="mt-2 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a leo lacus. Sed ac libero nibh. Etiam
              porttitor eros nec nunc aliquet, a sollicitudin ipsum hendrerit.
            </p>
          </div>

          <div className="bg-[#800000] rounded-lg p-6 max-w-xs text-center text-white shadow-lg">
            <div className="flex justify-center">
              <img
                src="orang2.png"
                alt="profile"
                className="w-24 h-24 rounded-full border-4 border-[#680000] -mt-16 bg-white"
              />
            </div>
            <h1 className="mt-4 font-bold text-lg tracking-wide">ANNA PHILS</h1>
            <p className="mt-2 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel risus ac nisi viverra tincidunt.
              Nulla facilisi.
            </p>
          </div>

          <div className="bg-[#800000] rounded-lg p-6 max-w-xs text-center text-white shadow-lg">
            <div className="flex justify-center">
              <img
                src="orang3.png"
                alt="profile"
                className="w-24 h-24 rounded-full border-4 border-[#680000] -mt-16 bg-white"
              />
            </div>
            <h1 className="mt-4 font-bold text-lg tracking-wide">MARY MADISON</h1>
            <p className="mt-2 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
