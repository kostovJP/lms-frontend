const Header = () => {
  return (
    <header className="bg-green-600 text-white px-4 py-3">
      <nav className="flex justify-between">
        <div className="text-lg font-semibold">LMS</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Dashboard</a></li>
          <li><a href="#" className="hover:underline">Courses</a></li>
          <li><a href="#" className="hover:underline">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;