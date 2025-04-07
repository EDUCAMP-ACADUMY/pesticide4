import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/8968696133`, '_blank');
  };

  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="h-5 w-5" />
              <a href="tel:9773926025" className="hover:text-green-300">+91 977-392-6025</a>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <MessageCircle className="h-5 w-5" />
              <button onClick={handleWhatsApp} className="hover:text-green-300">
                WhatsApp: +91 896-869-6133
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:friendlypestcontrol@gmail.com" className="hover:text-green-300">
                friendlypestcontrol@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-green-300">About Us</a></li>
              <li><a href="/shop" className="hover:text-green-300">Shop</a></li>
              <li><a href="/contact" className="hover:text-green-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>
            <div className="mt-4 flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-1" />
              <p>123 Main Street, City Name, State - 123456</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; {new Date().getFullYear()} Pesticle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;