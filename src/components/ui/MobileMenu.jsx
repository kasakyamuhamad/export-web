import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-1">
            <a 
              href="/" 
              className="text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span>Services</span>
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <a 
                    href="/services" 
                    className="block text-gray-600 hover:text-primary-600 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </a>
                  <a 
                    href="/services#skilled-labor" 
                    className="block text-gray-600 hover:text-primary-600 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Skilled Labor
                  </a>
                  <a 
                    href="/services#domestic-staff" 
                    className="block text-gray-600 hover:text-primary-600 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Domestic Staff
                  </a>
                  <a 
                    href="/services#visa" 
                    className="block text-gray-600 hover:text-primary-600 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Visa Processing
                  </a>
                </div>
              )}
            </div>

            <a 
              href="/gallery" 
              className="text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="/blog" 
              className="text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a 
              href="/about" 
              className="text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="/contact" 
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
}