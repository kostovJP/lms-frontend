const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-gray-100 p-4">
      <ul className="text-blue-500">
        <li className="mb-2"><a href="#">Menu Item 1</a></li>
        <li className="mb-2"><a href="#">Menu Item 2</a></li>
        <p className="text-lg font-semibold">This is the sidebar</p>
      </ul>
    </aside>
  );
};

export default Sidebar; 