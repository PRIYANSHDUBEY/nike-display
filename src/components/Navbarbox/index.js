import React from 'react'
import '../Navbarbox/styles.css';
import logo from '../../assests/jordanreal.jpg';
import search from '../../assests/icons8-search-48.png';
import logo2 from '../../assests/nike.png';
import heart from '../../assests/icons8-heart-64.png';
import bag from '../../assests/icons8-bag-32.png';



function index() {
  return (
    <div className='nav-main'>
        <div className="navbar-1 center-1">
           <div className="jordanlogo">
            <img className='logo' src={logo} alt="" />
           </div>
           <div className="blank">
            <p></p>
           </div>
           <div className="content1">
            <a href="" className='nav-item'>Find a store</a>
            <a href="" className='nav-item'>Help</a>
            <a href="" className='nav-item'>Join Us </a>
            <a href="" className='nav-item'>Sign in</a>
           </div>
        </div>
        
        <div className="navbar-2 center-2">
            <div>
                <img src={logo2} className="logo2" alt="" />
            </div>
            <div className="content2">
                <a href="" className='nav2-items'>New & Featured</a>
                <a href="" className='nav2-items'>Men</a>
                <a href="" className='nav2-items'>Women</a>
                <a href="" className='nav2-items'>Kids</a>
                <a href="" className='nav2-items'>Sale</a>
                <a href="" className='nav2-items'>Customize</a>
                <a href="" className='nav2-items'>SNKRS</a>
            </div>
            <div className="searchbar">
                <div className="searchinput">
              <button className='searchbtn'><img style={{width:"1.5rem"}} src={search} alt="" /></button>
              <input type="text" placeholder='Search' />
              </div>
              <img src={heart} className='icons' alt="" />
               <img src={bag} className='icons' alt="" />
            </div>
        </div>


    </div> 
  )
}

export default index