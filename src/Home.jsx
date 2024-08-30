
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="min-h-screen flex flex-col">
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-[#98FF98] to-[#004d00] text-center py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-white mb-4">Welcome to Our Site</h1>
        <p className="text-2xl text-white mb-8">Empowering you to manage your tasks and goals effectively.</p>
        <Link to="/register" className="bg-white text-[#004d00] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200">Get Started</Link>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="bg-gradient-to-br from-[#98FF98] to-[#004d00] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#004d00] mb-4">Sign Up</h3>
            <p className="text-gray-700">Create an account to start using our features and tools.</p>
            <Link to="/register" className="text-[#004d00] font-semibold hover:underline">Register Here</Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#004d00] mb-4">Set Goals</h3>
            <p className="text-gray-700">Define your goals and set tasks to achieve them.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#004d00] mb-4">Track Progress</h3>
            <p className="text-gray-700">Monitor your progress and stay on track with your tasks.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="bg-gradient-to-br from-[#98FF98] to-[#004d00] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#004d00] mb-4">Enhanced Productivity</h3>
            <p className="text-gray-700">Increase your productivity with streamlined task management.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#004d00] mb-4">Goal Achievement</h3>
            <p className="text-gray-700">Stay focused and achieve your goals efficiently.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#004d00] mb-4">User-Friendly Interface</h3>
            <p className="text-gray-700">Enjoy an intuitive and easy-to-navigate interface.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="bg-gradient-to-br from-[#98FF98] to-[#004d00] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">What Our Users Say</h2>
        <div className="flex flex-col items-center">
          <blockquote className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <p className="text-gray-700">"This app has transformed the way I manage my tasks. Highly recommend!"</p>
            <footer className="mt-4 text-right text-[#004d00]">- Jane Doe</footer>
          </blockquote>
          <blockquote className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-700">"A game-changer for productivity. Simple, effective, and user-friendly."</p>
            <footer className="mt-4 text-right text-[#004d00]">- John Smith</footer>
          </blockquote>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
