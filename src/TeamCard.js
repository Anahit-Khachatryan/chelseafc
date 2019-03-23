import React, { Component } from 'react';
import PlayerCard from "./PlayerCard";
import "./css/grad.css";
import playerData from "./playerData";


class TeamCard extends Component {
  render() {
    return (
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
    );
  }
}
export default TeamCard;