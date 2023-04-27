import React from 'react'
import './GoForItFooter.css';
import './GoForItFooterResponsive.css'
import facebookIcon from './GoForItFooterImg/facebook.svg'
import instagramIcon from './GoForItFooterImg/instagram.svg'
import twitterIcon from './GoForItFooterImg/social-twitter.svg'

export default function GoForItFooter() {
  return (
    <div className='GoForItFooter'>
        <div className="goforit">
            <h2>go <br /> <span>for it!</span></h2>
        </div>
        <div className="reseau-sociaux">
            <img src={facebookIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={twitterIcon} alt="" />
        </div>
    </div>
  )
}
