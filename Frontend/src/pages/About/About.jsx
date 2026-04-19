import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <div>
       <Navbar/>
       
       <div>
        <p>This Attendance Management System helps schools and colleges track
            student presence efficiently with modern digital tools.
          </p>
       <p>Thank you for visiting, and feel free to <a href="contact">contact</a> with us!</p>
       </div>
       
       <Footer/>
    </div>
  )
}

export default About