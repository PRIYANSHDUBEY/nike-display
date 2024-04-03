import React from 'react';
import shoe from '../../assests/hero-image.png';
import jordan from '../../assests/jordanreal.jpg';
import '../Hero/styles.css';


function Hero() {
  return (
    <>
    <div className='herosection'>
        <img src={jordan} className='logov' alt="" />
        <div className="contenthero">
            <a href="">New Realeases</a>
            <a href="">Jordan Sport</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">Kids</a>
        </div>
        <div className='banner-main'>
            <img className="banner" src={shoe} alt="" />
        </div>
    </div>
    <div className="herosection2">
        <h5 className='initial'>Jordan Apparel</h5>
        <h1 className='heroh1'>SP24LOOKBOOK</h1>
        <h5 className='initial'>New Season , New Vibes , Mordern Takes on Classic Jordan shittoluets are her for whole family </h5>
        <div className="btnss">
            <button className='darkbtn'>Shop Men's</button>
            <button className='darkbtn'>Shop Women's</button>
        </div>
    </div>
    </>
  )
}

export default Hero