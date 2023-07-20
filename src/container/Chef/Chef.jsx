import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' >
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef img' />
    </div> 

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>

        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Indulgence in every detail, perfection in every flavor.</p>
        </div>
        <p className='p__opensans'>Holding true to the values of impeccable craftsmanship, we use the finest ingredients to create exquisite dishes. Our dedication to exceptional service ensures each guest receives a personalized and unforgettable experience in our luxurious and refined setting.</p>
      
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
