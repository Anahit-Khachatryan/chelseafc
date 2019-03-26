import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Containercss.css';

// import rgbmar18 from './images/rgbmar18.webp'

 export const menuItems = [
    {name: 'About Chelsea', subMenus: [{name: 'About the Club', href:"https://www.chelseafc.com/en/about-chelsea/about-the-club"}, {name: 'About The Academy', href:"https://www.chelseafc.com/en/about-chelsea/about-the-academy"}, {name: 'History', href: "https://www.chelseafc.com/en/about-chelsea/history"}]},
    {name: 'Stamford Bridge', subMenus: [{name: 'Stadium Tours & Museum', href:"https://www.chelseafc.com/en/stamford-bridge/stadium-tours-and-museum0"}, {name: 'Stadium Megastore', href:'https://www.chelseafc.com/en/stamford-bridge/stadium-megastore'}, {name: 'Special Events', href:'https://www.chelseafc.com/en/stamford-bridge/special-events'}, {name: 'Getting to Stamford Bridge', href:'https://www.chelseafc.com/en/stamford-bridge/getting-to-stamford-bridge'},]},
    {name: 'Junior Blues', subMenus:[{name:'Junior Blues',href:'https://www.juniorblues.com/en'}]},
    {name: 'Community', subMenus: [{name: 'The Foundation', href:'https://www.chelseafc.com/en/foundation'}, {name:'Fans Forum', href:'https://www.chelseafc.com/en/community/fans--forum'}, {name: 'Building Bridges', href:'https://www.chelseafc.com/en/foundation/building-bridges'}]},
  ]
const Container  = function () {
    return (
        <div className="container">
        <div className="d-flex align-item-center">
        <ul className = 'navBar'>
            {menuItems.map(function(menuItem, i) {
                if (menuItem.subMenus != undefined) {
                     return (
                        <li key={i}>
                            <a href = {'#'}>  {menuItem.name} </a>
                            <ul>
                            {menuItem.subMenus.map(function(subMenu, i) {
                                return <li key={i}><a href={subMenu.href}>{subMenu.name}</a></li>;
                            })}
                            </ul>
                            </li>
                        
                    );  
                } else {
                    return ( 
                        <li key={i}><a href = {'#'}>{menuItem.name}</a></li>                       
                    )
                }
            })}
            </ul>
            </div>
        </div>
    );
}

export default Container;