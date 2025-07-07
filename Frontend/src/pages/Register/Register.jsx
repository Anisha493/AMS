const Register = () => {
  
  return (
    <div>
    <meta charSet="UTF-8" />
    <title>Register Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="bg-purple-500 text-white p-8 md:p-12 md:w-1/2 relative overflow-hidden">
        <div className="z-10 relative">
          <h2 className="text-2xl font-bold mb-6">📚StudentConnectNepal</h2>
          <div className="mt-20 md:mt-32">
            <div class="illustration font-size: 5rem text-align: center">👨‍🎓</div>
            <p className="max-w-md opacity-90">
                Hello Everyone!<br></br>
              Welcome to StudentConnectNepal for Student Attendance Management. Create your account to get started with the attendance management system. New users can register with their institutional credentials to access personalized attendance tracking and academic tools.
                
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-1/3 transform translate-x-1/4">
          <div className="relative w-64 h-64">
            <svg className="text-white/20 absolute top-10 left-10 w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
            <svg className="text-white/20 absolute bottom-10 right-10 w-20 h-20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
            
          </div>
        </div>
        <svg className="text-white/20 absolute bottom-10 left-10 w-24 h-24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      </div>
      <div className="p-2 md:p-12 md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
          
          <div className="mb-2">
            <p className="text-gray-600 mb-1">
             <span className="text-blue-500 font-bold">Welcome to StudentConnectNepal</span>
            </p>
            <h1 className="text-1xl">Register your account</h1>
          </div>
          
          <form>
            <div className="space-y-2">
              <div className="space-y-1">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  FullName
                </label>
                <input id="fullName" type="text" placeholder="Enter your full name" className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input id="email" type="text" placeholder="Enter your email address" className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input id="password" type="password" placeholder="Enter your Password" className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input id="password" type="password" placeholder="Enter your Password again" className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="space-y-1">
                <label htmlFor="Phone number" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input id="Phone number" type="password" placeholder="Enter your Phone number" className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="space-y-1">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input id="address" type="password" placeholder="Enter your Address" className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <button type="submit" className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200">
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Register