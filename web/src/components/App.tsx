import React from 'react';
import FrontPage from "./frontpage";
import Register from "./register";
import Page from "./page";
import { withRouter } from 'react-router'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
function App() {
  return (
      <div className="App">
        <div className="center w85">
          <div className="ph3 pv1 background-gray">
            <Switch>
              <Route exact path="/" component={FrontPage}/>
              <Route exact path="/REGISTER" component={Register} />
              <Route exact path="/PAGE" component={Page} />
               <Route component={() => <h1>404 Not Found</h1>}/>
            </Switch>
          </div>
        </div>
      </div>
  );
}

export default App;
