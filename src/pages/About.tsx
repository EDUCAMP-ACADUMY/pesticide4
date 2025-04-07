import React from 'react';
import { Users, Award, Clock, Shield, CheckCircle, Star, ThumbsUp, Target } from 'lucide-react';

const About = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/8968696133`, '_blank');
  };

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started with a mission to provide safe pest control solutions"
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Extended services to commercial properties"
    },
    {
      year: "2019",
      title: "Innovation",
      description: "Introduced eco-friendly pest control methods"
    },
    {
      year: "2023",
      title: "Achievement",
      description: "Reached 1000+ satisfied customers milestone"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a professional pest control company dedicated to providing safe and effective solutions for homes and businesses.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Target className="h-12 w-12 text-green-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional pest control services using environmentally friendly methods that ensure the safety of our clients and their properties while effectively eliminating pest problems.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Shield className="h-12 w-12 text-green-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted name in pest control services by maintaining the highest standards of quality and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Company Journey */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-green-700 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">1000+</h3>
            <p className="text-gray-600">Satisfied Customers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="h-12 w-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">10+ Years</h3>
            <p className="text-gray-600">Industry Experience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ThumbsUp className="h-12 w-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">100%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="h-12 w-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7</h3>
            <p className="text-gray-600">Customer Support</p>
          </div>
        </div>

        {/* Why Trust Us Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold mb-8">Why Trust Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-700" />
                <span>Licensed and certified professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-700" />
                <span>Eco-friendly and safe solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-700" />
                <span>Customized treatment plans</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-700" />
                <span>Guaranteed results</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-700" />
                <span>Competitive pricing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-700" />
                <span>Excellent customer service</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-700 text-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Contact us today for a free consultation and quote</p>
          <div className="flex justify-center space-x-4">
            <a href="tel:9773926025" className="bg-white text-green-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
              Call Now
            </a>
            <button onClick={handleWhatsApp} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-green-700">
              WhatsApp Us
            </button>
          </div>
          <p className="mt-4 text-white">
            Email: <a href="mailto:friendlypestcontrol@gmail.com" className="underline">friendlypestcontrol@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;