import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';
import Container from './Container';
import './css/general.css';
import ClockImg from './ClockImg'
import Title from './Title';
import Videos from './Videos';
import Footer from './Footer';
import TeamCard from './TeamCard'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>

        <div className="topHeader">
            <div className="container" >
            <Header />
            </div>
            
        </div>
        <div className="headerMiddle">
        <Container/>
        </div>
        </header>
        <main>
        <ClockImg /> 
        <Title />
         <Videos />
         </main>
         <Footer />
         <TeamCard />
      </div>      
    );
  }
}

export default App;
