import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import NewsPage from './components/NewsPage/NewsPage';
import NotFound from './components/NotFound/NotFound';
import Article from './components/Article/Article';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path = "/" component={Home} exact={true}/>
          <Route path = "/home" component={Home} exact={true}/>
          <Route path = "/news" component={NewsPage} exact={true}/>
          <Route path = "/Article/:id" component={Article} exact={true}/>
          <Route path = "/favourite" component={NewsPage} exact={true}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
