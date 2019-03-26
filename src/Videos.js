import React, { Component } from 'react';
import './css/video.css';


class Videos extends Component {
    
  render() {
    // const videos = [
    //     {  name : "Good Time", sour: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} ,
    //     {  name : "Good Day", sour: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"},
    //     {  name : "Good Life", sour: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} 
    // ]
    return (
      <div className="banner1">
      <div className='container'>
      <h2>Top 10 Goals in Chelsea History</h2>
      {/* <video class = "bannerVideo" width="750" height="500" controls >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
     </video> */}
     {/* <iframe  src="https://www.youtube.com/embed/7DZZXVDHIH4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
     <iframe class = "bannerVideo" width="560" height="315" src="https://www.youtube-nocookie.com/embed/SN4YSg8PSp4?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
    );
  }   
}


export default Videos;

