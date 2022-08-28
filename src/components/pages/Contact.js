import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../../styles/Contact.css";
import contactus from "../UI/OtherImages/contactus.png"
export default function Contact(props) {
  document.title = "PKM Punjab - Contact Us";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rjcl93l', 'template_iqufgls', form.current, '6_E-tnjKWsv0w476X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <div
      {...props.changeProgress(10)}
      className="container"
      style={{ marginTop: "3%", marginBottom: "3%" }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>
          You can just leave us a message and we'll contact you as soon as
          possible
        </p>
      </div>
      <div className="row">
        <div className="column">
          <img
            {...props.changeProgress(50)}
            src={contactus}
            alt="ContactImage"
            style={{ width: "100%" }}
          />
        </div>
        <div className="column">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label htmlFor="ename">Email</label>
            <input
              type="email"
              id="ename"
              name="email"
              placeholder="Your email.."
            />
            <label htmlFor="cname">Contact No.</label>
            <input
              {...props.changeProgress(70)}
              type="tel"
              id="cname"
              name="contact"
              placeholder="Your contact no.."
            />
            <label htmlFor="subject">Subject</label>
            <input
              {...props.changeProgress(70)}
              type="text"
              id="subject"
              name="subject"
              placeholder="Your Subject..."
            />
          
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something.."
              style={{ height: "170px" }}
            ></textarea>
            <input
              type="submit"
              value="Send"
              {...props.changeProgress(100)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
