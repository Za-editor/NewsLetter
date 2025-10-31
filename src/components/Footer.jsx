import { Link } from "react-router";

const Footer = () => {
  const policies = [
    "Privacy Policy",
    "Terms of Service",
    "Copyright Policy",
    "Data Policy",
    "Accessibility",
    "Help",
  ];

  const sectionsLeft = [
    { title: "General", id: "search" },
    { title: "World", id: "world" },
    { title: "Politics", id: "politics" },
    { title: "Science", id: "science" },
    { title: "Business", id: "business" },
    { title: "Environment", id: "environment" },
  ];
  const sectionsRight = [
    { title: "Travel", id: "travel" },
    { title: "Technology", id: "technology" },
    { title: "Lifestyle", id: "lifeandstyle" },
    { title: "Food", id: "food" },
    { title: "Sports", id: "sport" },
  ];

  return (
    <footer className="bg-[#080C0C] text-gray-300 py-10   font-sans">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* --- Left column: Logo --- */}
          <div className="flex flex-col items-center md:items-start md:w-1/4">
            <Link to={"/"}>
              <h1 className="text-3xl font-extrabold text-white uppercase tracking-wide">
                Newsletter
              </h1>
            </Link>
          </div>

          {/* --- Middle column: Policy links --- */}
          <div className="flex flex-col items-center md:items-center text-sm md:w-1/2 space-y-3">
            {/* Policy links */}
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-400">
              {policies.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Right column: Category links --- */}
          <div className="flex justify-center md:justify-end gap-12 text-sm md:w-1/4">
            <ul className="space-y-2">
              {sectionsLeft.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`category/${item.id}`}
                    className="hover:text-white transition-colors duration-200 text-[17px] font-bold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2">
              {sectionsRight.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`category/${item.id}`}
                    className="hover:text-white transition-colors duration-200 text-[17px] font-bold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider for small screens */}
        <div className="mt-8 border-t border-gray-700  flex justify-center items-center">
          {/* Copyright */}
          <p className="text-xs md:text-sm text-gray-500 pt-10">
            © 2025 Newsletter. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
