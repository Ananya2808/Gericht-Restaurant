import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>At GERICHT, we deliver an extraordinary dining experience. Our chefs create exceptional dishes, our staff offers attentive service, and our ambiance exudes sophistication. Join us for a culinary journey that delights and leaves a lasting impression.</p>
        <button type='buttom' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife'></img>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Proudly serving since 1980, GERICHT blends heritage and culinary mastery. Indulge in our storied history through exceptional dishes, creating a dining experience that transcends time with elegance and sophistication.</p>
        <button type='buttom' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
