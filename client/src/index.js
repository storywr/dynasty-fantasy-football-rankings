import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { Router, Route, browserHistory } from 'react-router';
import App from './App'
import PlayersPage from './components/PlayersPage';
import PlayersNew from './containers/PlayersNew';
import PlayersShow from './components/PlayersShow';
import RunningBacks from './components/RunningBacks';
import WideReceivers from './components/WideReceivers';
import Quarterbacks from './components/Quarterbacks';
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
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="/rb" component={RunningBacks} />
        <Route path="/wr" component={WideReceivers} />
        <Route path="/qb" component={Quarterbacks} />
        <Route path="/players/new" component={PlayersNew} />
        <Route path="/players/:id" component={PlayersShow} />
        <Route path="/players/:id/comments/new" component={CommentsNew} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
