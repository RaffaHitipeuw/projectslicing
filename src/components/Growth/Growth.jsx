const Growth = () => {
  return (
    <section className="font-Josefin bg-darkmaroon flex flex-col md:flex-row justify-between items-center px-6 md:px-32 py-40 gap-12">
      <section className="text-center md:text-left">
        <h1 className="text-white font-bold text-[40px] md:text-[70px] mb-6 md:mr-[200px]">
          Grow your <br /> business fast
        </h1>
        <p className="text-white font-normal text-[16px] md:text-[20px]">
          We understand how hard it is to grow a <br className="hidden md:block" /> business. That’s why we’re here to
          do it for you.
        </p>
        <button className="btn-primary mt-6">CONTACT US</button>
      </section>
      <section>
        <img src="img2.png" alt="" />
      </section>
    </section>
  );
};

export default Growth;
