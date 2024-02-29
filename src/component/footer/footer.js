import React from "react";
import "./footer.css";
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import HeadText from '../../component/header/header'
export default function Footer() {
	return (
		<div className="footer">
			<div className="footer-1">
				<img src={require("../../assets/home/Logo_SME-removebg-preview-copy-150x.png")} height={'150px'} width={'150px'} />

				<div className="footer-head">

					<HeadText title={'Experience & Discover Unforgettable'} type={'subheading'} headingclass='foote-rheading' />
					<HeadText title={' Musical Events with Symphony'} type={'subheading'} headingclass='foote-rheading' />


				</div>

			</div>
			<div className="footer-2">
				<div className="footer-socials">
					<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/people/Symphony-musical-events/61553212043405/" className="social-icon"><FaFacebook size={25} /></a>
					<a target="_blank" rel="noopener noreferrer" href="" className="social-icon"><FaGoogle size={25} /></a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/symphonymusicalevent/" className="social-icon"><FaInstagram size={25} /></a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fsymphonymusicalevent.com%2Fevent%2Fnew%2F" className="social-icon"><FaLinkedin size={25} /></a>


				</div>
				<ul className="terms">
					<li>Privacy Policy</li>
					<li>No Return Policy</li>
					<li>Cancellation and Refund Policy</li>
					<li>Terms & Conditions</li>
				</ul>
			</div>
			<div className="footer-3">
				<p>Copyright © 2024 Symphony Musical Event</p>
				<p>Powered by BM Digital House</p>
			</div>
		</div>
	);
}
