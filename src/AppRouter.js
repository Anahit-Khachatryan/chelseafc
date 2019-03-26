import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Team from './Team';
import rgbmar18 from './images/rgbmar18.webp';
import './css/Containercss.css';

// import './css/general.css';
// import './css/App.css';

function AppRouter() {
  return (
    <Router>
    
    <div className="topHeader">
    <div className="container" >
{/* <div className="topHeader"> */}
        {/* <nav className="container"> */}
        <a className="logo" href="#"><img src={rgbmar18} /></a>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/second/">Team</Link>
            </li>
            </ul>
        {/* </nav> */}
</div>
 </div>
  
        <Route path="/" exact component={Home} />
        <Route path="/second/" component={Team} />
      {/* </div> */}
    </Router>
  );
}

export default AppRouter;
