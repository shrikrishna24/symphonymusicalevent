import React, { useState } from 'react'
import './booking.css';
import Media from '../../component/media/media';
import HeadText from '../../component/header/header';
import Button from '../../component/button/button';

import { FaRectangleList, FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

export default function Event() {


    const eventDetails = [
        {
            icon: <FaCalendarAlt size={30} />,
            label: 'Event Date : ',
            values: 'January 7,2024'
        },
        {
            icon: <IoTime size={30} />,
            label: 'Event time : ',
            values: '8:00 pm'
        },
        {
            icon: <FaLocationDot size={30} />,
            label: 'Event Location : ',
            values: 'Mumbai'
        }
    ]

    // Define static amount
    const staticAmount = 1; // You can change this value as needed

    // Define handle submit function
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Amount:', staticAmount);
        var options = {
            key: "rzp_test_BaUMi7COFMcwe4",
            key_secret: "tCELZks79NoG529YHKEaRlup",
            amount: staticAmount * 100,
            currency: "INR",
            name: "trial website",
            description: "testing purpose",
            handler: function (response) {
                alert(response.razorpay_payment_id);
            },
            prefill: {
                name: "Dhruv Usadadiya",
                email: "dhruv.usadadiya1670@gmail.com",
                contact: "9167008384"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399aa"
            }
        };

        var pay = new window.Razorpay(options);
        pay.open();
    };

    return (
        <form className='booking-event'>
            <HeadText title={"Bollywood Dhamaka | Tribute to R.D. Burman Golden Era of Pancham Da"} type={"subheading"} headingclass="event-subheading" />

            <Media source={require('../../assets/booking-event/seats.jpeg')} />

            <div className='booking-by'>
                <FaRectangleList size={30} />
                <p>By : Prashant gaikwad, Vikas Bhosekar</p>
            </div>

            <div className='booking-details'>
                {eventDetails.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='booking-icons'>{item.icon}</div>
                            <div>
                                <p className='bdetails-label'>{item.label}</p>
                                <p className='bdetails-value'>{item.values}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <p className='booking-text'>Step into the new year with the rhythmic beats and timeless melodies of the Tribute to R.D Burman – Golden Era of Pancham Music event. Amidst the joyous celebrations , let the soulful tunes transport you to an era of musical brilliance , promising a harmonious blend of nostalgia and celebrations as we welcome the dawn of a promising year ahead.</p>

            <Button btnTitle={'Register'} />
        </form>
    )
}
