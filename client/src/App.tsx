import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NewsPage from './components/NewsPage/NewsPage';
import NotFound from './components/NotFound/NotFound';
import Article from './components/Article/Article';
import FavouriteArticle from './components/Article/FavouriteArticle';
import FavouritePage from './components/FavouritePage/FavouritePage';

interface IState {
  hubConnection: any,
  favouriteList: object
}
class App extends React.Component<{},IState> {
  public signalR = require("@aspnet/signalr");
  public state={
    hubConnection: new this.signalR.HubConnectionBuilder().withUrl("https://stayalertdevop.azurewebsites.net/hub").build(),
    favouriteList: [],
  }
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
