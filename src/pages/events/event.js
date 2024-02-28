import React from 'react'
import './event.css';
import Media from '../../component/media/media';
import HeadText from '../../component/header/header';
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Event() {
  const artist = [
    {
      path: require('../../assets/artists/Artist-4-copybewbew.png'),//done
      designation: 'Singer | Organiser',
      name: 'Vikas Bhosekar',
    },
    {
      path: require('../../assets/artists/Artist-3.png'), //done
      designation: 'Singer',
      name: 'Preeti Joshi',
    },
    {
      path: require('../../assets/artists/Artist-2.png'),//done
      designation: 'Anchor',
      name: 'RJ Amit',
    },
    {
      path: require('../../assets/artists/Artist-4-copy.png'), //done
      designation: 'Music Arrange',
      name: 'Sanjay Devde',
    },
    {
      path: require('../../assets/artists/Artist-15.png'), //done
      designation: 'Singer | Organiser',
      name: 'Dr. Prashant Gaikwad',
    }, {
      path: require('../../assets/artists/Artist-new-copy.png'),//done
      designation: 'Singer',
      name: 'Pankaj Bansode',
    }, {
      path: require('../../assets/artists/Artist-6.png'),//done
      designation: 'Singer',
      name: 'Vidyadhar Waghmare',
    }, {
      path: require('../../assets/artists/Artist-7.png'),//done
      designation: 'Singer',
      name: 'Smita Badrige',
    }, {
      path: require('../../assets/artists/Artist-12.png'),//done
      designation: 'Dholak Handsonick',
      name: 'Prakash Gaikwad',
    }, {
      path: require('../../assets/artists/Artist-9.png'),//done
      designation: 'Percussion',
      name: 'Suryakant gaikwad',
    }, {
      path: require('../../assets/artists/Artist-8.png'), //done
      designation: 'Singer',
      name: 'Mansi Dabhade',
    },
    {
      path: require('../../assets/artists/Artist-11.png'),//dome
      designation: 'Singer',
      name: 'Narendra Sakte',
    },
    {
      path: require('../../assets/artists/Artist-13.png'),//done
      designation: 'Sexophon',
      name: 'Sagar Mhaske',
    },
    {
      path: require('../../assets/artists/Artist-16.png'),//done
      designation: 'Singer',
      name: 'Smadhan Pawar',
    },
    {
      path: require('../../assets/artists/Artist-14.png'), //done
      designation: 'Drumer',
      name: 'Sahil Mishra',
    },
    {
      path: require('../../assets/artists/Artist-4-copyneww.png'),//done
      designation: 'Singer',
      name: 'Sangita Thakre',
    },
    {
      path: require('../../assets/artists/Artist-4-copyneWWnew.png'),//done
      designation: 'Singer',
      name: 'Girish Shewani',
    },
    {
      path: require('../../assets/artists/Artist-4-copybew.png'),//done
      designation: 'Singer',
      name: 'Ashok Arya',
    },
  ]

  return (
    <>
      <div className='event-img'>
        <HeadText title={"Event's"} type={'heading'} headingclass={'event-head'} />
      </div>

      <div className='event-content'>

        <div></div>

        <div></div>

      </div>

    </>
  )
}
