import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Essential Tips for Pest Prevention",
      excerpt: "Learn the most effective ways to prevent pest infestations in your home.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1632407466912-e49d24e4c7c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Common Household Pests and How to Deal with Them",
      excerpt: "Identify common household pests and learn the best methods to eliminate them.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1635340749618-06380f6bf108?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Eco-Friendly Pest Control Methods",
      excerpt: "Discover environmentally friendly approaches to pest control.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1584487465099-25d4e8338be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-gray-600">Stay updated with the latest pest control tips and news</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-green-700 font-semibold hover:text-green-800">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;