import React, { Component } from 'react';
import PlayerCard from "./PlayerCard";
import './css/Containercss.css';
import "./css/grad.css";
import playerData from "./playerData";
import Container from './Container';

class TeamCard extends Component {
  render() {
    return (
      <>
      <header>
      <Container />
      </header>
      <div className="grid-c">
      {
        playerData.map((item, key) => {
          return (
            <div className="grid-e">
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