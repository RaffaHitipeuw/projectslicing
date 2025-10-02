const Hero = () => {
  return (
    <header className="flex flex-col md:flex-row px-6 md:px-32 py-20 justify-between items-center bg-maroon">
      <section className="text-white max-w-xl text-center md:text-left">
        <h1 className="font-Josefin text-[40px] md:text-[70px] font-bold leading-tight">
          There’s a <br className="hidden md:block" /> better way to <br className="hidden md:block" /> grow
        </h1>
        <p className="font-Josefin text-lg mt-6 max-w-md leading-relaxed mx-auto md:mx-0">
          Are you having a hard time growing your online business? Our team can help.
        </p>
        <button className="btn-primary mt-6">GET STARTED</button>
      </section>
      <section className="mt-10 md:mt-0">
        <img src="landing.svg" alt="" />
      </section>
    </header>
  );
};

export default Hero;
