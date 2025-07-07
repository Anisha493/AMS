const SignIn = () => {
  
  return (
    <div>
    <meta charSet="UTF-8" />
    <title>Login Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="bg-purple-500 text-white p-8 md:p-12 md:w-1/2 relative overflow-hidden">
        <div className="z-10 relative">
          <h2 className="text-2xl font-bold mb-6">📚StudentConnectNepal</h2>
          <div className="mt-20 md:mt-32">
            <div class="illustration font-size: 5rem text-align: center">👨‍🎓</div>
            <p className="max-w-md opacity-90">
              Hello Everyone!<br></br>
              Welcome to StudentConnectNepal for Student Attendance Management. Access your attendance records and academic information. Students, faculty, and administrators can securely log in to view attendance data, generate reports, and manage class schedules.
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
      <div className="p-8 md:p-12 md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
          <div className="text-right mb-4">
            <span className="text-gray-500">No Account?</span>
            <a href="#" className="text-blue-500 font-medium">Sign up</a>
          </div>
          <div className="mb-8">
            <p className="text-gray-600 mb-1">
             <span className="text-blue-500 font-bold">Welcome to StudentConnectNepal</span>
            </p>
            <h1 className="text-1xl">Sign in to your account</h1>
          </div>
          
          <form>
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Enter your username or email address
                </label>
                <input id="email" type="text" placeholder="Username or email address" className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Enter your Password
                </label>
                <input id="password" type="password" placeholder="Password" className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <div className="text-right">
                  <a href="#" className="text-blue-500 text-sm">Forgot Password</a>
                </div>
              </div>
              <button type="submit" className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200">
                Sign in
              </button>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default SignIn