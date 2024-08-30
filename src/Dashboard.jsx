
import React from 'react';

const Dashboard = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#98FF98] to-[#004d00] text-white">
    <header className="bg-[#004d00] p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
    </header>
    <main className="flex-1 p-8">
      <div className="bg-white text-[#004d00] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
        <p className="text-gray-700">Here’s an overview of your activities and statistics.</p>
        {/* Additional dashboard content */}
      </div>
    </main>
  </div>
);

export default Dashboard;
