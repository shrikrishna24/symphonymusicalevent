import React from "react";
import "./contact.css";
import TextBox from "../../component/input/input";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
	return (
		<div className="contact">
			<div className="contact-upper">
				<h2>Contact For Booking</h2>
				<div className="contact-seprator"></div>
				<p>
					Book your musical experience with us. Reach out now for unforgettable
					events and seamless reservations
				</p>
			</div>
			<div className="contact-lower" onSubmit={handleSubmit}>
        <form className="contact-form">
        <label>First Name<TextBox  placeholder={"Enter Your First Name"}/></label>
        <label>Last Name<TextBox placeholder={"Enter Your Last Name"} /></label>
        <label>Email<TextBox placeholder={"Enter Your Email"} /></label>
        <label>Message<TextBox placeholder={"Enter Your Message"} /></label>
        <button type="submit">Submit</button>
        </form>
      </div>
		</div>
	);
}
