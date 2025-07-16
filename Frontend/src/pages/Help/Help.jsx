import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Help = () => {
  return (
    <div>
    <Navbar/>
     <div className="bg-blue-600 text-white px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between relative">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Need Help?</h1>
          <p className="text-lg mb-6">
            We’re available in various channels to meet your needs. Reach out to us by live chat, email or online support case.
            You can also find us on your favorite social media platforms.
          </p>
        
          <div className="relative w-full">
            <input type="text" placeholder=" 🔍 Search help.."className="bg-white w-full pl-12 pr-5 py-3 rounded-full text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"/>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-White-400">
            <div class="absolute inset-y-0 left-3 flex items-center text-blue-600">
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
      </div>
            </div>
          </div>
        </div>
       
        <div className="hidden md: block">
          <div className="h-72 w-72 bg-blue-500 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-lg">Support Team</p>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default Help
