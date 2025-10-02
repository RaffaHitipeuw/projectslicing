const Footer = () => {
  return (
    <footer className="bg-maroon py-[70px] px-6 md:px-32">
      <section className="flex flex-col md:flex-row md:justify-between gap-10 text-left font-Josefin">
        <div className="text-white">
          <h1 className="font-bold mb-4">LOGO</h1>
        </div>
        <div>
          <h1 className="text-white font-bold mb-4">Navigation</h1>
          <ul className="text-white space-y-3">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white font-bold mb-4">Contact</h1>
          <ul className="text-white space-y-3">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white font-bold mb-4">Address</h1>
          <p className="text-white leading-relaxed">
            3807 Geneva Street <br />
            Brooklyn, New York
          </p>
        </div>
        <div>
          <h1 className="text-white font-bold mb-4">Newsletter</h1>
          <div className="flex items-center bg-lightmaroon rounded-s-xl rounded-r-3xl overflow-hidden w-full max-w-sm shadow-lg shadow-black/30">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent px-4 py-2 text-white placeholder-white focus:outline-none"
            />
            <button className="bg-white text-maroon px-4 py-2 rounded-r-3xl hover:shadow-md hover:shadow-maroon/50 transition">
              ➤
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
