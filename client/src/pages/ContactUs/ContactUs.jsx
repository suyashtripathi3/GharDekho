import React from "react";
import "./ContactUs.css";
import Swal from 'sweetalert2'
import useAuthCheck from "../../hooks/useAuthCheck";
import Contact from "../../components/Contact/Contact";
// import Contact from "../../components/Contact/Contact";

const ContactUs = () => {

  const [result, setResult] = React.useState("");
  // const { validateLogin } = useAuthCheck();

  

  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
    Swal.fire({
      icon: "sending",
      title: "Sending....",
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      color: 'green',         // Change text color
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    const formData = new FormData(event.target);

    formData.append("access_key", "5221d46a-1657-46ca-a2dc-1cf0d034b356");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
        // setResult("Form Submitted Successfully");
      Swal.fire({
        icon: "success",
        title: "Form Submitted successfully",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        color: 'green',         // Change text color
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } else {
      // console.log("Error", data);
      setResult(data.message);
      Swal.fire({
        icon: "error",
        title: "Error sending message",
        text: data.message,
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        color: 'red',         // Change text color
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
  }
};
  return (
    <section className="wrapper">
      <div>
        {/* Contact Component */}
        <Contact/>
        {/* <Contact us form/>  */}
        <section className="contact">
          <form onSubmit={onSubmit}>
            <h2 className="fhead">Contact <span>Us</span></h2>
            <div><p>We always ready to help by providing the best services to you.</p></div>
            <div className="input-box">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="conInput"
                placeholder="Enter your name"
                required
                name="name"
                />
            </div>
            <div className="input-box">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="email"
                className="conInput"
                placeholder="Enter your e-mail"
                required
                name="email"
                />
            </div>
            <div className="input-box">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                className="conInput msg"
                placeholder="Enter your message"
                required
                ></textarea>
            </div>
            <button className="button"
            >Send Message</button>
          </form>
          <div/>
        </section>
          <span>{result}</span>
      </div>
    </section>
  );
};

export default ContactUs;
