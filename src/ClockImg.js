import React, { Component } from 'react';
import Clock from './Clock';
import './css/banner.css';

class ClockImg extends React.Component{
    render(){
        return(
            <div className="banner">
            <div className="container">
            <div className="bannerText">
             <h1>Chelsea VS TEAM </h1>
             <Clock />
             </div>
             </div>
            </div> 
        )
    }
}

export default ClockImg;