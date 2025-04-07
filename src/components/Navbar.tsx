import React from 'react';
import { Link } from 'react-router-dom';
import { Bug } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Bug className="h-8 w-8 text-green-700" />
              <span className="ml-2 text-xl font-bold text-green-700">Pesticle</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-green-700">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-700">About</Link>
            <Link to="/shop" className="text-gray-700 hover:text-green-700">Shop</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-700">Contact</Link>
            <a href="tel:9773926025" className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;