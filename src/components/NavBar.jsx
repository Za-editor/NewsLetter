import { useState, useEffect } from "react";
import { FiSearch, FiSun } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState("World");
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [time, setTime] = useState(new Date());


  const sections = [
    "All",
    "Politics",
    "World",
    "Economy",
    "Science & Tech",
    "Business",
    "Travel",
    "Climate",
    "Lifestyle",
    "Food",
    "Sports",
  ];

  //   Logic to stop scroll when sidemenu is opened
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onSearch = (e) => {
    e?.preventDefault();
    // placeholder: handle search action
    console.log("search for:", query);
  };

  // Getting the Date and time
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // format time into HH:mm:ss
  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="w-full font-sans text-white bg-[#080C0C]">
      {/* Top bar */}
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <div className="flex items-center gap-4">
          {/* Hamburger for mobile */}
          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-white/5"
          >
            <RxHamburgerMenu size={24} />
          </button>
          
          <Link to={"/"}>
            <h1 className="text-3xl font-extrabold tracking-wide uppercase">
              Newsletter
            </h1>
          </Link>
        </div>

        {/* Center: Search (desktop) */}
        <form
          onSubmit={onSearch}
          className="hidden md:flex items-stretch w-2/3 lg:w-1/2"
          role="search"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for headlines"
            className="flex-1 px-4 py-2 bg-[#106D62] text-gray-100 placeholder-gray-300 focus:outline-none"
            aria-label="Search for headlines"
          />
          <button
            type="submit"
            className="bg-[#A04646] px-4 py-2 text-white font-semibold uppercase text-sm tracking-wide hover:bg-[#8b3d3d] transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Category Row (desktop) */}
      <nav className="bg-[#1A1A1A] ">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-0  py-5 text-sm font-medium">
          <ul className="hidden md:flex flex-wrap gap-4 md:gap-6">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActive(section)}
                  className={`pb-1 transition text-[17px] cursor-pointer ${
                    active === section
                      ? "border-b-2 border-[#0B776B] text-[#0B776B]"
                      : "text-gray-200 hover:text-[#0B776B]"
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side info on category row */}
          <div className="hidden md:flex items-center gap-3 text-gray-300">
            <span className="text-sm">{formattedTime}</span>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu / Drawer */}
      {/* overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      {/* drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 max-w-full bg-[#0f1615] transform transition-transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-white/5"
          >
            <MdClose size={22} />
          </button>
        </div>

        {/* Search inside drawer */}
        <div className="px-4 py-4">
          <form onSubmit={onSearch} className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for headlines"
              className="flex-1 px-3 py-2 rounded-sm bg-[#106D62] placeholder-gray-200 focus:outline-none text-gray-100"
              aria-label="Search"
            />
            <button
              type="submit"
              className="bg-[#A04646] px-3 py-2 text-white rounded-sm"
            >
              <FiSearch />
            </button>
          </form>
        </div>

        {/* Categories */}
        <nav className="px-4 py-2">
          <ul className="flex flex-col gap-2">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    setActive(section);
                    setMenuOpen(false); // close after selection
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md transition ${
                    active === section
                      ? "bg-[#0B776B] text-white"
                      : "text-gray-200 hover:bg-white/5"
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* optional footer links in drawer */}
        <div className="mt-auto px-4 py-6 text-sm text-gray-400">
          <p>© Newsletter</p>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
