import React, { Component } from 'react';
import PlayerCard from "./PlayerCard";
import './css/Containercss.css';
import "./css/grad.css";
import playerData from "./playerData";
import Container from './Container';
import axios from "axios";

class TeamCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      allData: []
    }
  }
  async componentDidMount() {
    let res = await axios.get("http://localhost:8010/getData1");
    this.setState({
      allData: res.data
    });
  }
  render() {
    let { allData } = this.state;
    return (
      <>
      <header>
      <Container />
      </header>
      <div className="grid-c">
      {
        allData.map((item, key) => {
          return (
            <div key={key} className="grid-e">
              <PlayerCard item={item} key={key}/>
            </div>
          )
        })
      }
      </div>
      </>
    );
  }
}




export default TeamCard;