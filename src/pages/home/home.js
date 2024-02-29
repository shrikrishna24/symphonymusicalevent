import React, { useEffect, useState } from "react";
import "./home.css";
import HeadText from "../../component/header/header.js";
import Button from "../../component/button/button.js";
import Media from "../../component/media/media.js";
import ri1 from "../../assets/home/gallery-01-free-img.jpg";
import ri2 from "../../assets/home/bg-02-free-img.jpg";
import ri3 from "../../assets/home/gallery-03-free-img.jpg";
import ri4 from "../../assets/home/gallery-04-free-img.jpg";
import ri5 from "../../assets/home/gallery-05-free-img.jpg";

const images = [ri1, ri2, ri3, ri4, ri5];

export default function Home() {
	let sponsors = [
		{
			src: require("../../assets/sponsers/LOGo-SYM-e1699424065426-150x150.png"),
			title: "Sakshi Groups",
		},
		{
			src: require("../../assets/sponsers/Logo-Sonfer-150x150.jpg"),
			title: "Sir Sadashiv Patil",
		},
		{
			src: require("../../assets/sponsers/Untitlsynbrred-1-copy-150x150.jpg"),
			title: "GPS Group",
		},
	];

	const artistss = [
		{
			path: require("../../assets/artists/Artist-4-copybewbew.png"), //done
			designation: "Singer | Organiser",
			name: "Vikas Bhosekar",
		},
		{
			path: require("../../assets/artists/Artist-3.png"), //done
			designation: "Singer",
			name: "Preeti Joshi",
		},
		{
			path: require("../../assets/artists/Artist-2.png"), //done
			designation: "Anchor",
			name: "RJ Amit",
		},
		{
			path: require("../../assets/artists/Artist-4-copy.png"), //done
			designation: "Music Arrange",
			name: "Sanjay Devde",
		},
	];

	return (
		<>
			<div className="container">
				<div className="content">
					<div className="content-heading">
						<HeadText
							title={"Symphony Musical"}
							type={"heading"}
							headingclass="artist-name"
						/>

						<h2>Events</h2>
					</div>

					<div className="content-info">
						<HeadText
							title={"Tribute to The Legend R.D.BURMAN"}
							type={"subheading"}
							headingclass="artist-name"
						/>
						<div className="content-seprator"></div>
						<p>
							Explore and book a diverse range of musical events, from classical
							concerts to contemporary performances. Let the notes of passion
							and melody create memories that last a lifetime. Your ticket to
							extraordinary musical moments awaits.
						</p>
					</div>
				</div>
				<div className="tribute">
					<div className="tribute-content">
						<HeadText
							title={
								"Tribute to R.D. Burman - Bollywood Dhamaka Music Event - Kalyan"
							}
							type={"subheading"}
						/>
						<HeadText title={"Date : 07-01-2024 Time: 8:30pm Onwards"} />
					</div>
					<div className="nav-socials">
						<Button btnTitle={"BOOK TICKETS"} btnClass={"btn-secondary"} />
					</div>
				</div>
				<div className="about">
					<div className="about-content">
						<HeadText
							title={"About Us"}
							type={"heading"}
							headingclass="artist-name"
						/>

						<div className="seprator"></div>

						<p className="about-text">
							Welcome to Symphony Musical Events, where the magic of music comes
							to life. At Symphony, we believe that every note has the power to
							create unforgettable moments. Whether you’re a lover of classical
							elegance, a fan of vibrant contemporary beats, or someone seeking
							the thrill of live performances, our platform is your gateway to a
							world of musical wonder. We curate a diverse array of events,
							featuring talented artists and musicians who will captivate your
							senses and transport you to another realm.
						</p>

						<HeadText
							title={"Mr. Vikas Bhosekard"}
							type={"subheading"}
							headingclass="artist-name"
						/>

						<p className="evemt-org">Event Organiser</p>
					</div>
				</div>
				<div className="event">
					<h1>Join Our Latest Events</h1>
					<div className="event-info">
						<div className="event-left">
							<img
								src={require("../../assets/home/WhatsApp-Image-2023-10-17-at-4.26.46-PM-3-819x1024.jpeg")}
								height={"500px"}
								width={"450px"}
							/>
						</div>
						<div className="event-right">
							<h5>Home / Music Shows / Live Music Event – Kalyan, 2024</h5>
							<h2>Bollywood Dhamaka | Tribute to R.D. Burman Golden Era of Pancham Da</h2>
							<h2 className="amount">₹400 - ₹500</h2>
							<h6>Location : Kalyan (W)</h6>
							<p>Step into the New Year with the rhythmic beats and timeless melodies of the Tribute to R.D. Burman – Golden Era of Pancham Music event. Amidst the joyous celebrations, let the soulful tunes transport you to an era of musical brilliance, promising a harmonious blend of nostalgia and celebration as we welcome the dawn of a promising year ahead.</p>
							<div><button>Book Tickets</button></div>
						</div>
					</div>
				</div>
				<div className="artist">
					<div className="artist-info">
						<HeadText title={"Meet Artist's"} type={"heading"} />

						<div className="artist-seprator"></div>

						<div className="artistss-list">
							{artistss.map((item, index) => {
								return (
									<div className="artistss-card" key={index}>
										<Media source={item.path} height={"240px"} />
										<p>{item.designation}</p>
										<HeadText
											title={item.name}
											type={"subheading"}
											headingclass="artistss-name"
										/>
									</div>
								);
							})}
						</div>
					</div>
					<div className="artist-child">
						<Button btnTitle={"View All artists"} />
					</div>
				</div>
				<div className="rolling-images">
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Image ${index}`}
							className={index}
						/>
					))}
				</div>
				<div className="sponsors">
					<div className="sponser-container">
						<h1>Special Thanks to Our Sponsors</h1>

						<div className="sponsor-content">
							{sponsors.map((items, index) => (
								<Media source={items.src} width={"200px"} height={"200px"} />
							))}
							{sponsors.map((items, index) => (
								<HeadText
									title={items.title}
									type={"subheading"}
									headingclass="artistss-name"
								/>
							))}
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</>
	);
}
