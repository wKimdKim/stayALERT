import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NewsPage from './components/NewsPage/NewsPage';
import NotFound from './components/NotFound/NotFound';
import Article from './components/Article/Article';
import FavouriteArticle from './components/Article/FavouriteArticle';
import FavouritePage from './components/FavouritePage/FavouritePage';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path = "/" component={NewsPage} exact={true}/>
          <Route path = "/news" component={NewsPage} exact={true}/>
          <Route path = "/Article/:id" component={Article} exact={true}/>
          <Route path = "/favourite" component={FavouritePage} exact={true}/>
          <Route path = "/favourite/:id" component={FavouriteArticle} exact={true}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
