import React from 'react'
import './event.css';
import Media from '../../component/media/media';
import HeadText from '../../component/header/header';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Button from '../../component/button/button';


export default function Event() {


  return (
    <>
      <div className='event-img'>
        <HeadText title={"Event's"} type={'heading'} headingclass={'event-head'} />
      </div>

      <div className="event">
						<HeadText
							title={"Join Our Latest Events"}
							type={"heading"}
							headingclass="artist-name"
						/>

					<div className="event-info">
						<div className="event-left">
							<img
								src={require("../../assets/home/WhatsApp-Image-2023-10-17-at-4.26.46-PM-3-819x1024.jpeg")}
								height={"500px"}
								width={"450px"}
							/>
						</div>
						<div className="event-right">
							<p>Home / Music Shows / Live Music Event – Kalyan, 2024</p>
							<h2>Bollywood Dhamaka | Tribute to R.D. Burman Golden Era of Pancham Da</h2>
							<h2 className="amount">₹400 - ₹500</h2>
							<h6>Location : Kalyan (W)</h6>
							<p>Step into the New Year with the rhythmic beats and timeless melodies of the Tribute to R.D. Burman – Golden Era of Pancham Music event. Amidst the joyous celebrations, let the soulful tunes transport you to an era of musical brilliance, promising a harmonious blend of nostalgia and celebration as we welcome the dawn of a promising year ahead.</p>
							<Button btnTitle={"BOOK TICKETS"} />

						</div>
					</div>
				</div>

    </>
  )
}
