import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header: React.FC = () => {
  return (
    <header className='w-full bg-gray-100 py-4'>
      <nav className='container mx-auto flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>YourBrand</h2>
        <ul className='flex space-x-4'>
          <li><ScrollLink to="main" smooth={true}>Home</ScrollLink></li>
          <li><ScrollLink to="products" smooth={true}>Products</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true}>Contact</ScrollLink></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;