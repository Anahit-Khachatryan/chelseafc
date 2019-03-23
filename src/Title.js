import React, { Component } from 'react';
import Card from './Card';
import data from './data';
import Next from './images/Next.svg';
import Prev from './images/Prev.svg';
import './css/Card.css';

class Title extends Component {

  constructor(props){
    super(props);
    this.state = {
    properties: data.properties,
    property: data.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {appearHome, property} = this.state;
    return (
      <div className="card-container">

      <div className="sliderBotton">
        <Card property={property} />

        {/* <button onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button> */}
        <button className="leftBtn" onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}><img src={Next} /></button>
        <button className="rightBtn" onClick={() => this.prevProperty()} disabled={property.index === 0}><img src={Prev} /></button>
        {/* <Home property={property} /> */}

      </div>
      </div>
    );
  }
}

export default Title;
