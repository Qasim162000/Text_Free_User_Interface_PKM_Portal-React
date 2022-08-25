import React from 'react';
import "../../styles/Contact.css";

export default function Contact() {
  return (
    <div className="container">
    <div style={{textAlign:"center"}}>
      <h2>Contact Us</h2>
      <p>You can just leave us a message and we'll contact you as soon as possible</p>
    </div>
    <div className="row">
      <div className="column">
        <img src="https://cdn.discordapp.com/attachments/643501117095018506/1012415028852445194/contacts-friends-groups-icon-with-png-and-vector-format-for-free-661239-removebg-preview.png" alt ="ContactImage" style={{width:"100%"}}/>
      </div>
      <div className="column">
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
          <label htmlFor="fname">Email</label>
          <input type="email" id="ename" name="email" placeholder="Your email.."/>
          <label htmlFor="fname">Contact No.</label>
          <input type="tel" id="cname" name="contact" placeholder="Your contact no.."/>
          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  </div>
  )
}
