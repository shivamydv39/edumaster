import React from 'react';
import './Header.css'; // Optional for styling

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <img
        src="/path/to/your-header-image.jpeg" // Replace with actual path
        alt="EduMaster"
        className="h-12"
      />
      <h1 className="text-xl font-bold text-black">EDUMASTER</h1>
    </header>
  );
};

export default Header;
