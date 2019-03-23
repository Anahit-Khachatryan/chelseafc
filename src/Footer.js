import React, { Component } from 'react';
import './css/footer.css'

const menu = [{
    key: 1,
    value: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232/v1/logos/sponsors/carabao_-_article_-_trans",
    href: "http://www.carabaoenergy.co.uk/"  
}, {
    key: 2,
    value: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232/v1/site-assets/partner-logos/Yokohama_XL_Color%403x",
    href: "https://www.yokohama.co.uk/"
  }, {
    key: 3,
    value: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232/v1/site-assets/partner-logos/Nike_XL_Color%403x",
    href:'https://www.nike.com/language_tunnel?ref=https%3A%2F%2Fwww.chelseafc.com%2Fen'
  }, 
  ];

  const menu1= [{
    key: 4,
    value: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232/v1/site-assets/partner-logos/Beats_color%403x",
    href: "https://www.beatsbydre.com/uk/"  
}, {
    key: 5,
    value: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232/v1/site-assets/partner-logos/FooterLogos/footer_logo_easports",
    href: "https://www.ea.com/en-gb/games/fifa/fifa-19/buy"
  }, {
    key: 6,
    value: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232/v1/site-assets/partner-logos/FooterLogos/footer_logo_ericsson",
    href:'https://www.ericsson.com/en'
  }, 
  {
    key: 7,
    value: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232/v1/logos/sponsors/footer-logos/MSC_-_footer_-_trans",
    href:'https://www.msccruises.co.uk/'
  },
  {
    key: 8,
    value: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232/v1/site-assets/partner-logos/Hublot_Color%403x",
    href:'https://www.hublot.com/en/partnerships/chelsea-fc?utm_source=chelsea&utm_medium=site&utm_campaign=official-timekeeper'
  }, 
  {
    key: 9,
    value: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232/v1/site-assets/partner-logos/hyundai_-_footer",
    href:'https://www.chelseafc.com/en/news/2018/6/11/chelsea-and-hyundai-begin-new-partnership'
  }, 
  {
    key: 10,
    value: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232/v1/logos/sponsors/footer-logos/millennium_-_footer_-_trans",
    href:'https://www.millenniumhotels.com/en/chelseafc/'
  },  
  ];

  const Footer=()=>(
      <div className="footer">
      <div className="footer__sponsors">
      <ul class='nav'>
      {
        menu.map(({key,value, href}) => <li key ={key}><a href = {href}><img src={value}/></a></li>)

      }

    </ul>
    
    <ul>
      {
        menu1.map(({key,value, href}) => <li key ={key}><a href = {href}><img src={value}/></a></li>)

      }

    </ul>
    </div>
     <div className='copyRight'>
 {new Date().getFullYear()} Copyright: <a href="https://www.chelseafc.com/en">chelseafc.com </a> <span>Chelsea FC. All rights reserved. No part of this site may be reproduced without our written permission.</span>
     </div>
     </div>
  );

 export default Footer;