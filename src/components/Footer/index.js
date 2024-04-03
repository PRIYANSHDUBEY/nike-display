import React from 'react';
import '../Footer/styles.css';
import facebook from '../../assests/icons8-facebook.png';
import twitter from '../../assests/icons8-twitter.png';
import instagram from '../../assests/icons8-insta-50.png';
import youtube from '../../assests/icons8-youtube.png';
import locator from '../../assests/icons8-marker-o-50.png';





function Footer() {
  return (

     <div className='footersection'>
        <div className="standingfoot">
            <div className="anchors">
              <div className="anchorssection">
                <h4 className='ss'>FIND A STORE</h4>
                <h4 className='ss' href="">BECOME A MEMBER</h4>
                <h4 className='ss' href="">SEND US FEEDBACK</h4>
              </div>
              <div className="help">
                <h4>HELP</h4>
                <a className='headings' href="">Get help</a>
                <a className='headings' href="">Order Status</a>
                <a className='headings' href="">Delivery</a>
                <a className='headings' href="">Returns</a>
                <a className='headings' href="">Payment Options</a>
                <a className='headings' href="">Contact us for On Nike.in enquires</a>
                <a className='headings' href="">Contact us for All Other enquires</a>
              </div>
              <div className="company">
                <h4 className='ss'>COMPANY</h4>
                <a className='headings' href="">About Nike</a>
                <a className='headings' href="">News</a>
                <a className='headings' href="">Careers</a>
                <a className='headings' href="">Investors</a>
                <a className='headings' href="">Sustainability</a>
              </div>
            </div>
            <div className="socialmedia">
                <img className='socials' src={twitter} alt="" />
                <img className='socials' src={facebook} alt="" />
                <img className='socials' src={instagram} alt="" />
                <img className='socials' src={youtube} alt="" />
            </div>
        </div>
        <div className="basement">
            <div className="country">
                <img src={locator} className='socials' alt="" />
                <h2 className='headings'> India <span>© 2024 Nike, Inc. All rights reserved</span></h2>
            </div>
            <div className="parts">
                <a className='headings' href="">Guides</a>
                <a className='headings' href="">Terms of Sale</a>
                <a className='headings' href="">Terms of Use</a>
                <a className='headings' href="">Nike Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Footer