import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-restricted-globals
    const userChoice = confirm("Do you want to submit?");

    if (userChoice === true) {
      alert("Thank you! Your message has been received.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="fade-in">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p style={{ fontSize: "1.5rem" }}>
          Have questions? Want to collaborate or just say hello?
        </p>
      </section>

    <section className="contact py-5">
  <div className="container" style={{ maxWidth: "800px" }}>
    
      
    <div className="row g-5">
      
        
      <div className="col-md-5">
        <h2>Contact Details</h2>
        <p className="mt-3"><strong>Prop:</strong> M. Nasar</p>
        <p><strong>YouTube:</strong> <a href="https://youtube.com/@mihashim4">@mihashim4</a></p>
        <p><strong>Email:</strong> mihashim4@gmail.com</p>
        <p><strong>Mobile:</strong> 9486452629</p>
        <p><strong>Res:</strong> 04651-271145</p>
        <p><strong>Address:</strong> Kulasekharam Road, Keezh Pammam,<br />Marthandam - 629 165</p>
        <p className="mt-3">I'm always open to tech discussions, tutorial requests, or feedback on my content.</p>
      </div>

       
      <div className="col-md-7">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-danger">Send Message</button>
        </form>
      </div>

    </div>   
  </div>      
</section>
       
    </div>
  );
}

export default Contact;
