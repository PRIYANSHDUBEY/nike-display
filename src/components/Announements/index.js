import React, { useState } from 'react';
import '../Announements/styles.css';
import { useEffect } from 'react';

function Announements() {
    const [announcement, setAnnouncement] = useState({
        header: 'Sale up to 40%',
        linkText: 'See More'
      });
    
      useEffect(() => {
        const interval = setInterval(() => {
          setAnnouncement(prevAnnouncement => {
            if (prevAnnouncement.header === 'Sale up to 40%') {
              return {
                header: 'Move, Shop, Customise & Celebrate With Us.',
                header:"No matter what you feel like doing today, It’s better as a Member.",
                linkText: 'Join Us'
              };


            } else {
              return {
                header: 'Sale up to 40%',
                linkText: 'Shop All Our New Markdowns'
              };
            }
          });
        }, 3000); // Change content every 3 seconds
    
        return () => clearInterval(interval); // Clean up interval on unmount
      }, []);
    
  return (

    <div className="announcement-container">
      <h3 className="announcement-header">{announcement.header}</h3>
      <a href="#" className="announcement-link">{announcement.linkText}</a>
    </div>
  )
}

export default Announements;