import React from 'react'
import './artist.css'
import Media from '../../component/media/media';
import HeadText from '../../component/header/header';
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Artist() {

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
      <div className='artist-img'>
        <HeadText title={'Artists'} type={'heading'} headingclass={'artist-head'} />
      </div>

      <div className='artist-content'>
        <h1>Artist's</h1>

        <div className='artist-list'>
          {artist.map((item, index) => {
            return (
              <div className='artist-card' key={index}>
                <Media source={item.path} height={'240px'} />
                <p>{item.designation}</p>
                <HeadText title={item.name} type={'subheading'} headingclass='artist-name' />
              </div>
            )

          })}
        </div>

      </div>
      <div className='artistsocial-content'>
        <HeadText title={'Follow us on Social Media'} type={'subheading'} headingclass='artist-social' />

        <div className='artist-icons'>
          <a href='https://www.facebook.com/people/Symphony-musical-events/61553212043405/'><FaFacebook size={30} style={{ paddingTop: '3px' }} /></a>
          <a href='https://www.instagram.com/symphonymusicalevent/'><FaInstagram size={30} style={{ paddingTop: '3px' }} /></a>
        </div>
      </div>
    </>
  )
}
