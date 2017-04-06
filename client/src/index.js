import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { Router, Route, browserHistory } from 'react-router';
import App from './App'
import PlayersNew from './containers/PlayersNew';
import PlayersShow from './components/PlayersShow';
import PlayerSearch from './components/PlayerSearch';
import RunningBacks from './components/RunningBacks';
import WideReceivers from './components/WideReceivers';
import Quarterbacks from './components/Quarterbacks';
import TightEnds from './components/TightEnds';
import ADP from './components/ADP';
import League from './components/League';
import CommentsNew from './containers/CommentsNew';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const middleWare = [thunk];

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare)
)

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="/rb" component={RunningBacks} />
        <Route path="/wr" component={WideReceivers} />
        <Route path="/qb" component={Quarterbacks} />
        <Route path="/te" component={TightEnds} />
        <Route path="/adp" component={ADP} />
        <Route path="/league" component={League} />
        <Route path="/players/new" component={PlayersNew} />
        <Route path="/player/:name" component={PlayerSearch} />
        <Route path="/players/:id" component={PlayersShow} />
        <Route path="/players/:id/comments/new" component={CommentsNew} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
