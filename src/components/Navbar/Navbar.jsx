const Navbar = () => {
  return (
    <nav className="bg-maroon px-6 md:px-32 py-6 flex items-center justify-between relative">
      <h1 className="text-white font-bold">LOGO</h1>
      <label htmlFor="menu-toggle" className="text-white text-3xl cursor-pointer md:hidden">
        ☰
      </label>
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <ul className="flex flex-col md:flex-row absolute md:static bg-maroon md:bg-transparent left-0 w-full md:w-auto top-16 md:top-auto text-center md:text-left text-white font-bold gap-y-6 md:gap-x-10 py-6 md:py-0 hidden peer-checked:flex md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
