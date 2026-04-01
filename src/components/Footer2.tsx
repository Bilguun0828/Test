const Footer2 = () => {
  const navLinks = ["About Us", "Courses", "Blog", "Help Center", "Privacy Policy"];

  return (
    <footer className="bg-[#4d32e5] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">EduSmart</h2>
          <p className="text-sm opacity-90 mt-1">
            Learn simply. Build confidently.
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </footer>
  );
};

export default Footer2;