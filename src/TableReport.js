import React, { Component } from 'react';
// import './App.css';
import Table from "./Table";
import topSoccers from './topSoccers';
class TableReport extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            asaaaaa
            </div>  
        </header>
        <div id='table'>
          <Table/>
        </div>
        <div>
          <topSoccers/>
        </div>    
        </div>
    );
  }
}


export default 'TableReport' ;