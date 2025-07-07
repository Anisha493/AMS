import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <div
        className="bg-cover bg-center bg-no-repeat text-white py-32 px-4"
        style={{
          backgroundImage: "url('https://wpvip.edutopia.org/wp-content/uploads/2024/12/hero_blog_Brain-Based-Learning_Teaching-Strategies_photo_iStock_2154414848_SeventyFour.jpg?w=2000&quality=85')", // ✅ if stored in public folder
        }}
      >
        <div className="max-w-3xl mx-auto text-center  p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Streamlining Student Attendance: A Modern Approach
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Enhancing educational efficiency through a smart and intuitive Attendance Management System.
          </p>
          <Link
            to="/signin"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-4 shadow-lg rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Real-time Tracking</h3>
              <p className="text-gray-700 text-sm">
                Instantly mark and monitor attendance using a secure digital system.
              </p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Reporting & Analytics</h3>
              <p className="text-gray-700 text-sm">
                Generate detailed attendance reports and track trends over time.
              </p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">User-friendly Interface</h3>
              <p className="text-gray-700 text-sm">
                Easy navigation and simple design for students and teachers .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;