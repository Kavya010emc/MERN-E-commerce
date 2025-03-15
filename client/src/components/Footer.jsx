import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul>
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/shop" className="hover:text-blue-400">Shop</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="/terms" className="hover:text-blue-400">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Email: curatedclicks@gmail.com</p>
            <p className="mb-2">Phone: +91 9876543210</p>
            <p>Address: 123 Rathinam Street, coimbatore, India</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-blue-600">
                <FaFacebookF size={24} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} YourShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
