import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Saved from './pages/Saved';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/saved" component={Saved} />
        <Route path="/" component={Homepage} />
      </Switch>

    </BrowserRouter>
  )
};

export default App;