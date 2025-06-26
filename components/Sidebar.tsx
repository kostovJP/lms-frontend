'use client'; // Required for Next.js App Router

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`hidden md:flex flex-col bg-gray-100 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-12' : 'w-64'
      } p-4`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="mb-4 text-gray-600 hover:text-black self-end"
      >
        {isCollapsed ? <Menu size={20} /> : <X size={20} />}
      </button>

      {/* Sidebar Content - Hidden completely when collapsed */}
      {!isCollapsed && (
        <>
          <ul className="text-blue-500">
            <li className="mb-2">
              <a href="#">Menu Item 1</a>
            </li>
            <li className="mb-2">
              <a href="#">Menu Item 2</a>
            </li>
          </ul>
          <p className="text-lg font-semibold mt-4">This is the sidebar</p>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
