import React from 'react';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Airasia from './Airasia';
// import Jetstar from './Jetstar';
// import Nokair from './NokAir';
// import Thaiairasia from './Thaiairasia';
// import GoldenMyanmar from './GoldenMyanmar';
// import AirKbz from './AirKbz';
// import AirThanlwin from './AirThanlwin';
// import { partner } from '../constants/constant';
import PartnerPage from './PartnerPage';
function App() {
  return (
    <Router>
      {/* <div> */}
              {/* <Link to="/home"></Link>
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link> 
              <Link to="/card">card</Link> */}
        <Switch>
          {/* <Route path="/jetstar">
            <Jetstar />
          </Route>
          <Route path="/airasia">
            <Airasia />
          </Route>
          <Route path="/nokair">
            <Nokair />
          </Route>
          <Route path="/thaiairasia">
            <Thaiairasia />
          </Route>
          <Route path="/goldenmyanmarairline">
            <GoldenMyanmar />
          </Route>
          <Route path="/airkbz">
            <AirKbz />
          </Route>
          <Route path="/airthanlwin">
            <AirThanlwin />
          </Route> */}
          <Route path="/partner/:partnerName">
            <PartnerPage />
            </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;