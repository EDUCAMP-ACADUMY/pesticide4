import React from 'react';
import { Shield, Award, Leaf, CheckCircle, Users, Clock, Star, ThumbsUp } from 'lucide-react';

const Home = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/8968696133`, '_blank');
  };

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Homeowner",
      content: "Excellent service! They completely eliminated our pest problem within a week.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Restaurant Owner",
      content: "Professional team with great attention to detail. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Office Manager",
      content: "Regular pest control service that keeps our workplace completely pest-free.",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Safe & Effective Pest Control Services</h1>
            <p className="text-xl mb-8">Professional pest control and sanitation services for your home or business.</p>
            <div className="flex space-x-4">
              <button onClick={handleWhatsApp} className="bg-green-700 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-800">
                Get Free Quote
              </button>
              <a href="tel:9773926025" className="bg-white text-green-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Shield className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Safe for Family</h3>
              <p className="text-gray-600">Child and pet-friendly solutions for your peace of mind</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Leaf className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Environmental-conscious pest control methods</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Clock className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock emergency pest control service</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Award className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Certified Team</h3>
              <p className="text-gray-600">Licensed and experienced professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-700 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">Using the latest pest control equipment and techniques</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-700 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
                  <p className="text-gray-600">Tailored pest control plans for your specific needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-700 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
                  <p className="text-gray-600">100% satisfaction guarantee on all our services</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1632407466912-e49d24e4c7c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Pest Control Service"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Happy Clients</div>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div className="text-center">
              <ThumbsUp className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact us today for a free consultation and quote</p>
          <div className="flex justify-center space-x-4">
            <a href="tel:9773926025" className="bg-green-700 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-800">
              Call Now
            </a>
            <button onClick={handleWhatsApp} className="bg-white text-green-700 border-2 border-green-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-50">
              WhatsApp Us
            </button>
          </div>
          <p className="mt-4 text-gray-600">
            Email us: <a href="mailto:friendlypestcontrol@gmail.com" className="text-green-700 hover:underline">friendlypestcontrol@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;