import React from 'react';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './component/TeamDetails/TeamDetails';
import NoMatch from './component/NoMatch/NoMatch';

const App = () => {
  return (
    <div>

<Router>
      <Switch>
        <Route path="/home">
          <Home></Home>

        </Route>
        <Route path="/team/:teamId">
          <TeamDetails/>
        </Route>
        <Route  exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
};

export default App;