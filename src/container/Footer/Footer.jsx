import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay , Newsletter } from '../../components'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+91 1234567890</p>
        <p className='p__opensans'>+91 1234567890</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans'>"The best way to find yourelf is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 50}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>10:00 am - 01:00 am</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>10:00 am - 03:00 am</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
