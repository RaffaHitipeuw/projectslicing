const Work = () => {
  return (
    <section className="font-Josefin bg-darkmaroon flex flex-col md:flex-row justify-between items-center px-6 md:px-32 py-40 gap-12">
      <section>
        <img src="img1.png" alt="" className="md:-mt-[300px]" />
      </section>
      <section className="text-center md:text-left">
        <h1 className="text-white font-bold text-[40px] md:text-[70px] mb-6 md:mr-[200px]">
          We take our <br /> work seriously
        </h1>
        <p className="text-white font-normal text-[16px] md:text-[20px]">
          Wasting time is not in our vocabulary. You can{" "}
          <br className="hidden md:block" /> expect to get effective results in no time.
        </p>
        <button className="btn-primary mt-6">CONTACT US</button>
      </section>
    </section>
  );
};

export default Work;
