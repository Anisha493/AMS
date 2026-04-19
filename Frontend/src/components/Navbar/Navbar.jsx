import { Link } from "react-router-dom";
<<<<<<< HEAD

const Navbar = ({ onAboutClick, onContentClick, onContactClick, onHelpClick }) => {
 return (
  // Sticky navigation bar
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/*Logo section */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              📚Student Connect Nepal
            </Link>
          </div>
           {/*Navigation and Auth Buttons */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Navigation buttons */}
=======
const Navbar = ({ onAboutClick, onContentClick, onContactClick, onHelpClick }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Student Connect Nepal
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
>>>>>>> 2fda68d40d5cff0d7e7989cdff653a061fd19466
              <button
                onClick={onAboutClick}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 cursor-pointer"
              >
                About
              </button>
              <button
                onClick={onContentClick}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 cursor-pointer"
              >
                Content
              </button>
              <button
                onClick={onContactClick}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 cursor-pointer"
              >
                Contact
              </button>
              <button
                onClick={onHelpClick}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 cursor-pointer"
              >
                Help
              </button>
<<<<<<< HEAD
              {/* Authentication links */}
=======
>>>>>>> 2fda68d40d5cff0d7e7989cdff653a061fd19466
              <Link
                to="/signin"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blu e-500 transition duration-300"
              >
                Register
              </Link>
            </div>
          </div>
<<<<<<< HEAD

          
=======
>>>>>>> 2fda68d40d5cff0d7e7989cdff653a061fd19466
        </div>
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 2fda68d40d5cff0d7e7989cdff653a061fd19466
