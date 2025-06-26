import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-600 text-white px-4 py-3">
      <nav className="flex justify-between">
        <div className="text-lg font-semibold">LMS</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Dashboard</a></li>
          <li><a href="#" className="hover:underline">Courses</a></li>
          <li><a href="#" className="hover:underline">Profile</a></li>
          <Link href="/login" className="hover:text-green-300 bg-white text-black px-5 rounded-md hover:bg-black">Login</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;