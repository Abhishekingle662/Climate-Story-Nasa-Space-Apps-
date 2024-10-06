import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">YourBrand</h3>
          <p>© 2024 YourBrand. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-blue-400"><FaInstagram size={24} /></a>
          <a href="#" className="hover:text-blue-400"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;