import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-4 w-auto h-30 bg-indigo-500 text-white font-semibold">
        <div class="logo">
         <div class="logo-icon text-xl md:text-2xl font-bold text-white-800">📚 StudentConnectNepal</div>
        </div>
        <ul className="list-none flex justify-between items-center">
          <Link to="/about" className="mr-5 hover:text-gray-300">
            <li className="list-none">About Us</li>
          </Link>
          <Link to="/content" className="mr-5 hover:text-gray-300">
            <li className="list-none">Content</li>
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-300">
            <li className="list-none">Contact</li>
          </Link>
          <Link to="/help" className="mr-5 hover:text-gray-300">
            <li className="list-none">Help</li>
          </Link>
          <Link to="/signIn"className="bg-blue-400 hover:text-blue-400 hover:bg-white py-1 px-3">
            <li className="list-none">Sign In</li>
          </Link>
          <Link to="/register"className="bg-blue-400 hover:text-blue-400 hover:bg-white py-1 px-3">
            <li className="list-none">Register</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;