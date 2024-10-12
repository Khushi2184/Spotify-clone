// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <nav className="w-64 h-screen bg-gray-800 text-white">
        <h1 className="text-2xl p-4">Spotify Clone</h1>
        <ul>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Search</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Your Library</li>
        </ul>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;
