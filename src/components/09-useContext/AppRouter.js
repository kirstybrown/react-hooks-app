import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { AboutScreen } from './AboutScreen';
  

const AppRouter = () => {
  return (
      <Router>
          <div>

              <Switch>
                  <Route path="/about" component={ AboutScreen } />

              </Switch>



          </div>
      </Router>
    
  )
}

export default AppRouter