import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { footerLinks } from "../data/data"; // adjust path

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-12">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full">
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              {footerLinks.company.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="font-semibold mb-3">GetHelp</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              {footerLinks.getHelp.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              {footerLinks.support.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              {footerLinks.contact.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex md:flex-col items-center md:items-end gap-4">
          <FaInstagram className="text-xl cursor-pointer hover:scale-110 transition" />
          <FaFacebookF className="text-xl cursor-pointer hover:scale-110 transition" />
          <FaTwitter className="text-xl cursor-pointer hover:scale-110 transition" />
        </div>

      </div>

    </footer>
  );
};

export default Footer;