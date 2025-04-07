import React from 'react';
import { Bug, SprayCan as Spray } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "General Pest Control Kit",
    description: "Complete solution for common household pests",
    price: 2999,
    image: "https://images.unsplash.com/photo-1632407436637-c6d06c58e821?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Mosquito Control Spray",
    description: "Effective mosquito control solution",
    price: 599,
    image: "https://images.unsplash.com/photo-1599102348736-f35a25c08d2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
"
  },
  {
    id: 3,
    name: "Cockroach Control Kit",
    description: "Specialized treatment for cockroach infestation",
    price: 1499,
    image: "https://images.unsplash.com/photo-1584487465099-25d4e8338be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
"
  },
  {
    id: 4,
    name: "Termite Treatment Solution",
    description: "Professional grade termite control",
    price: 3999,
    image: "https://images.unsplash.com/photo-1635340749618-06380f6bf108?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Bed Bug Elimination Kit",
    description: "Complete bed bug treatment package",
    price: 2499,
    image: "https://images.unsplash.com/photo-1599102348736-f35a25c08d2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Ant Control Solution",
    description: "Effective ant control treatment",
    price: 899,
    image: "https://images.unsplash.com/photo-1632407436637-c6d06c58e821?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Shop = () => {
  const handleWhatsApp = (productName: string) => {
    const message = `Hi, I'm interested in purchasing ${productName}`;
    window.open(`https://wa.me/896869133?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600">Professional pest control solutions for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-700">₹{product.price}</span>
                  <button
                    onClick={() => handleWhatsApp(product.name)}
                    className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 flex items-center"
                  >
                    <Spray className="h-5 w-5 mr-2" />
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop
