import React from 'react'
import './home.css'
import HeadText from '../../component/header/header.js'
import Button from '../../component/button/button.js'
import Media from '../../component/media/media.js'



export default function home() {
  let sponsors = [{
    src: require("../../assets/sponsers/LOGo-SYM-e1699424065426-150x150.png"),
    title: "Sakshi Groups",
  }, {
    src: require("../../assets/sponsers/Logo-Sonfer-150x150.jpg"),
    url: "Sir Sadashiv Patil",
  }, {
    src: require("../../assets/sponsers/Untitlsynbrred-1-copy-150x150.jpg"),
    url: "GPS Group",
  }]


  return (
    <>
      <div className='container'>
        <div className='content'>
          <HeadText title={'Symphony Musical Events'} type={'heading'} />
          <HeadText title={'Tribute to The Legend R.D.BURMAN'} type={'subheading'} />
          <p>Explore and book a diverse range of musical events, from classical
            concerts to contemporary performances. Let the notes of passion
            and melody create memories that last a lifetime. Your ticket to
            extraordinary musical moments awaits.</p>
        </div>
        <div className='tribute'>
          <div className='tribute-content'>
            <HeadText title={'Tribute to R.D. Burman - Bollywood Dhamaka Music Event - Kalyan'} type={'subheading'} />
            <HeadText title={'Date : 07-01-2024 Time: 8:30pm Onwards'} />
          </div>
          <div className="nav-socials">
            <Button btnTitle={"BOOK TICKETS"} btnClass={'btn-secondary'} />
          </div>
        </div>
        <div className='about'></div>
        <div className='event'></div>
        <div className='artist'></div>
        <div className='sponsors'>
          <div className="sponser-container">
            <HeadText title={'Special Thanks to Our Sponsors'} type={'heading'} />
            <div className="sponsor-content">
              {sponsors.map((items, index) => (
                <Media source={items.src} width={"200px"} height={"200px"} />
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>

    </>
  )
}
