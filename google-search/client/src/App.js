import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigationbar from './components/Nav';
import searchPage from "./pages/Search";
import savePage from "./pages/Saved";

function App() {
  return (
      // <div>
      //     <Navigationbar/>
      // </div>
    <Router>
      <div>
          <Navigationbar />
          <Switch>
            <Route exact path="/" component={searchPage} />
            <Route exact path="/search" component={searchPage} />
            <Route exact path="/saved" component={savePage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;