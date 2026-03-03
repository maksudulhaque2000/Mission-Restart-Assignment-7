import React from "react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Best Practices for Effective Customer Support",
      excerpt:
        "Learn how to provide exceptional customer support that builds loyalty and trust. Discover proven strategies used by top support teams.",
      author: "Sarah Johnson",
      date: "February 28, 2026",
      category: "Best Practices",
      readTime: "5 min read",
      image: "🎯",
    },
    {
      id: 2,
      title: "How to Prioritize Support Tickets Efficiently",
      excerpt:
        "Master the art of ticket prioritization with our comprehensive guide. Learn how to identify urgent issues and manage your support queue effectively.",
      author: "Michael Chen",
      date: "February 25, 2026",
      category: "Tips & Tricks",
      readTime: "7 min read",
      image: "📊",
    },
    {
      id: 3,
      title: "Building a Knowledge Base That Customers Actually Use",
      excerpt:
        "A well-organized knowledge base can reduce support tickets by 40%. Here's how to create documentation that your customers will love.",
      author: "Emma Wilson",
      date: "February 20, 2026",
      category: "Documentation",
      readTime: "6 min read",
      image: "📚",
    },
    {
      id: 4,
      title: "The Complete Guide to Ticket Management Systems",
      excerpt:
        "Everything you need to know about modern ticket management systems, from basic features to advanced automation capabilities.",
      author: "David Brown",
      date: "February 15, 2026",
      category: "Guides",
      readTime: "10 min read",
      image: "🎫",
    },
    {
      id: 5,
      title: "5 Ways to Reduce Customer Support Response Time",
      excerpt:
        "Speed matters in customer support. Discover actionable strategies to cut down response times and improve customer satisfaction.",
      author: "Lisa Anderson",
      date: "February 10, 2026",
      category: "Productivity",
      readTime: "4 min read",
      image: "⚡",
    },
    {
      id: 6,
      title: "Understanding Customer Support Metrics That Matter",
      excerpt:
        "Track the right metrics to measure and improve your support performance. Learn about CSAT, NPS, response time, and more.",
      author: "James Wilson",
      date: "February 5, 2026",
      category: "Analytics",
      readTime: "8 min read",
      image: "📈",
    },
    {
      id: 7,
      title: "Automation in Customer Support: A Practical Guide",
      excerpt:
        "Automate repetitive tasks without losing the human touch. Learn how to implement smart automation in your support workflow.",
      author: "Sophia Taylor",
      date: "January 30, 2026",
      category: "Automation",
      readTime: "9 min read",
      image: "🤖",
    },
    {
      id: 8,
      title: "Creating Effective Canned Responses for Common Issues",
      excerpt:
        "Save time with pre-written responses while maintaining personalization. See examples of effective canned responses.",
      author: "Robert Martinez",
      date: "January 25, 2026",
      category: "Templates",
      readTime: "5 min read",
      image: "💬",
    },
  ];

  const categories = [
    "All",
    "Best Practices",
    "Tips & Tricks",
    "Guides",
    "Productivity",
    "Analytics",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Blog
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Tips, guides, and best practices for exceptional customer support
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 hover:bg-purple-100 hover:text-purple-600 text-gray-700 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition cursor-pointer"
            >
              {/* Post Image/Icon */}
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 h-48 flex items-center justify-center text-6xl">
                {post.image}
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-700">{post.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Subscribe to Our Newsletter
          </h3>
          <p className="mb-6 opacity-90">
            Get the latest support tips and best practices delivered to your
            inbox weekly
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
