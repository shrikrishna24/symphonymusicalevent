import React from "react";
import "./contact.css";
import TextBox from "../../component/input/input";
import HeadText from '../../component/header/header';
import Button from '../../component/button/button';
import Media from '../../component/media/media';

export default function Contact() {

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const value = Object.fromEntries(data.entries());
		const body = {
			fullName: value.fullName,
			email: value.email,
			subject: value.subject,
			message: value.message,
		};
	}

	return (
		<div className="contact">
			<div className="contact-upper">
				<HeadText title={'Contact For Booking'} type={'heading'} />
				<div className="contact-seprator"></div>
				<p>
					Book your musical experience with us. Reach out now for unforgettable
					events and seamless reservations
				</p>
			</div>
			<div className="contact-lower" onSubmit={handleSubmit}>
				<form className="contact-form" onSubmit={handleSubmit}>

					<div>
						<TextBox inputName="fname" inputLabel={'First Name*'} placeholder={"Enter Your First Name"} />
						<TextBox inputName="lname" inputLabel={'Last Name*'} placeholder={"Enter Your Last Name"} />
					</div>
					<TextBox inputName="email" inputLabel={'Email*'} inputType="email" placeholder={"Enter Your Email"} inputDivClass='contact-field' />
					<TextBox inputName="message" inputLabel={'Message'} placeholder={"Enter Your Message"} inputDivClass='contact-field' />
					<Button btnTitle="submit" btntype={'submit'} />
				</form>

				<Media source={require('../../assets/contact/img.jpg')} height={'450px'} />
			</div>
		</div>
	);
}
