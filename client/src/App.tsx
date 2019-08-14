import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path = "/" component={Home} exact={true}/>
          <Route path = "/Home" component={Home} exact={true}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
