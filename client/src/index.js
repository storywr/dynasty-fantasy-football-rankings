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
import CommentsNew from './containers/CommentsNew';
import * as ReactBootstrap from 'react-bootstrap'

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
        <Route path="/players" component={PlayersPage} >
          <Route path="/players/new" component={PlayersNew} />
          <Route path="/players/rb" component={RunningBacks} />
          <Route path="/players/wr" component={WideReceivers} />
          <Route path="/players/:id" component={PlayersShow} >
            <Route path="/players/:id/comments/new" component={CommentsNew} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
