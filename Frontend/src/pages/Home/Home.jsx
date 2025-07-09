import { Link } from "react-router-dom";
import { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const contactRef = useRef(null);
  const helpRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHelp = () => {
    helpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <Navbar 
        onAboutClick={scrollToAbout}
        onContentClick={scrollToContent}
        onContactClick={scrollToContact}
        onHelpClick={scrollToHelp}
      />
      <div
        className="bg-cover bg-center bg-no-repeat text-black py-32 px-4"
        style={{
          backgroundImage: "url('https://wpvip.edutopia.org/wp-content/uploads/2024/12/hero_blog_Brain-Based-Learning_Teaching-Strategies_photo_iStock_2154414848_SeventyFour.jpg?w=2000&quality=85')",
        }}
      >
        <div className="max-w-3xl mx-auto text-center p-8 rounded-lg">
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

      <div ref={aboutRef} className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-700 text-lg max-w-6xl mx-auto mb-1">
          Student Connect Nepal is committed to providing cutting-edge digital solutions focused on improving attendance tracking and educational analysis. This Attendance Monitoring System allows schools and colleges to effectively track students attendance using modern digital tools.</p>
        <p className="text-gray-700 text-lg max-w-5xl mx-auto mb-1">
          Student Connect Nepal is built on a committed community of members working in development, teaching, and design who come together to turn visits to schools into smooth digital experiences.</p>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-1">
          The mission of our work is eliminating paperwork, reducing absences, and offering teachers immediate resources to effectively and significantly reduce attendance data.</p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          It was nice having you here, and you're welcome to call us anytime.</p>
      </div>
      
      <div ref={contentRef} className="bg-white py-16 px-4">
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
                Easy navigation and simple design for students, teachers, and admins.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={contactRef} className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> info@studentconnectnepal.com, studentconnectnepal901@gmail.com
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> +977-14567890, +977-0123456789
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span> Itahari, Nepal
                </p>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Contact</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div ref={helpRef} className="bg-white py-16 px-4">
        <div className="bg-white-600 text-black px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between relative">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Need Help?</h1>
          <p className="text-lg mb-6">
            We’re available in various channels to meet your needs. Reach out to us by live chat, email or online support case.
            You can also find us on your favorite social media platforms.
          </p>
        
          <div className="relative w-98">
            <input type="text" placeholder=" 🔍 Search help.."className="bg-white w-full pl-12 pr-5 py-3 rounded-full text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"/>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-White-400">
            <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
            </div>
          </div>
        </div>
       
        <div className="hidden md:block">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Help & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">How do I mark attendance?</h4>
                  <p className="text-gray-700 text-sm">
                    Simply log in to your account and click on the "Mark Attendance" button to record your presence.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Can I view my attendance history?</h4>
                  <p className="text-gray-700 text-sm">
                    Yes, you can view your complete attendance history in the "My Attendance" section.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">What if I forget to mark attendance?</h4>
                  <p className="text-gray-700 text-sm">
                    Contact your teacher or administrator to manually update your attendance record.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Getting Started</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Step 1: Sign Up</h4>
                  <p className="text-gray-700 text-sm">
                    Create your account using your student ID and email address.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Step 2: Verify Email</h4>
                  <p className="text-gray-700 text-sm">
                    Check your email and click the verification link to activate your account.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Step 3: Start Tracking</h4>
                  <p className="text-gray-700 text-sm">
                    Log in and start marking your attendance for classes and events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
