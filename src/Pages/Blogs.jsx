import React, { useState } from "react";

const Blogs = () => {
    const blogs = [
        { title: "Thriving Amidst Challenges", image: "/images/Blog1.png", description: "Explore how individuals and companies can unlock the potential of adversity with resilience and innovation." },
        { title: "Demystifying Artificial Intelligence", image: "/images/Blog2.png", description: "An insight into how AI is transforming technology and industry, shaping a more efficient and automated future." },
        { title: "Embracing the Power of Imagination", image: "/images/Blog3.png", description: "Discover how creativity and innovation can transform businesses and personal growth." },
        { title: "Nature’s Magnificent Tapestry", image: "/images/Blog4.png", description: "A deep dive into the beauty of nature and its intricate connections that inspire creativity and well-being." },
        { title: "Building Stronger Connections", image: "/images/Blog5.png", description: "True communication involves active listening, understanding, and empathy, bridging gaps and strengthening relationships." },
        { title: "Power Of Imagination Makes Us Infinity", image: "/images/Blog6.png", description: "In the digital age, imagination fuels creativity and enhances meaningful relationships beyond words." },
        { title: "Recruitment Resilience: Navigating Rejection", image: "/images/Blog7.png", description: "Rejection is inevitable in life. Learn how to navigate setbacks with resilience and come back stronger." },
        { title: "How to Leverage AI in Recruitment Today", image: "/images/Blog8.png", description: "AI has revolutionized industries, including recruitment. Discover how AI can enhance talent acquisition processes." },
    ];

    const recentPosts = [
        "Counteroffer Conundrum: Navigating the Pros and Cons for Employers and Employees",
        "Interview Horror Stories: Remote Work’s Spookiest Moments",
        "The Hidden Impact of Remote Work",
    ];

    const categories = [
        "Candidates", "Cost-Savings", "Employee Retention", "Hiring", "Job Boards", "Outsourced Recruiting", "Pivotal Talent Search", "Tips & Tricks", "Uncategorized"
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 4;
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const currentBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

    return (
        <div className="max-w-6xl mx-auto py-28 px-6 text-center">
            {/* Full-Page Centered Header */}
            <div className="text-center mb-8">
                    <div className="relative inline-block">
                    <img src="/images/Blog.png" alt="FAQ Icon" className="w-36 h-24" />
                        <h2 className="text-6xl font-bold text-gray-900">Blogs</h2>
                        <img src="/images/FAQBg.png" alt="Underline" className="absolute left-0 bottom-[-10px] w-full -z-40" />
                    </div>
                    <p className="text-gray-600 mt-2">
                        Connection in the Modern World: Beyond Digital Interactions
                    </p>
                </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Blog Section */}
                <div className="md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentBlogs.map((blog, index) => (
                            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                                    <p className="text-gray-600 mt-2">{blog.description}</p>
                                    <button className="mt-4 bg-black text-white py-2 px-4 rounded flex flex-row">
                                        Read More <img src="/images/Arrow.png" alt="" className="ml-2 h-5 w-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-8 space-x-2">
                        {[...Array(totalPages)].map((_, index) => (
                            <button key={index} className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-white"}`} onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                        <button className="px-4 py-2 border rounded-md text-black" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                            Next Page
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold border-b pb-2">Recent Posts</h3>
                        <ul className="mt-3 space-y-2">
                            {recentPosts.map((post, index) => (
                                <li key={index} className="text-gray-800 text-left hover:text-blue-600 cursor-pointer">{post}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold border-b pb-2">Categories</h3>
                        <ul className="mt-3 space-y-2">
                            {categories.map((category, index) => (
                                <li key={index} className="text-gray-800 hover:text-blue-600 cursor-pointer flex items-center">
                                    <span className="mr-2">›</span> {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
