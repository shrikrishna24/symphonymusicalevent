import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
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
					<FaFacebook className="social-icon" />
					<FaGoogle className="social-icon" />
					<FaInstagram className="social-icon" />
				</div>
				<ul className="terms">
					<li>Terms & Conditions</li>
					<li>No Return Policy</li>
					<li>Cancellation and Refund Policy</li>
					<li>Privacy Policy</li>
				</ul>
			</div>
			<div className="footer-3">
				<p>Copyright © 2024 Symphony Musical Event</p>
				<p>Powered by BM Digital House</p>
			</div>
		</div>
	);
}
