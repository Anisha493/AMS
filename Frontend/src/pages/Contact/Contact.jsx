import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
            <div>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p><strong>Name:</strong> StudentConnectNepal </p>
          <p><strong>Email:</strong> studentconnectnepal901@gmail.com</p>
          <p><strong>Phone:</strong> +977-0123456789</p>
          <p><strong>Address:</strong> Itahari, Nepal</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;