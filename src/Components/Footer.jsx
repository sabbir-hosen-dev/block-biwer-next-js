import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="  bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold">BlogView</h2>
            <p className="mt-2 text-gray-400">Simple BLog viewing web site</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-400">
                Facebook
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-blue-400">
                Twitter
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-400">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} BlogView. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
