import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { Router, Route, browserHistory } from 'react-router';
import App from './App'
import PlayersPage from './containers/PlayersPage';
import PlayersNew from './containers/PlayersNew';
import PlayersShow from './containers/PlayersShow';
import RunningBacks from './components/RunningBacks';
import WideReceivers from './components/WideReceivers';

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
          <Route path="/players/:id" component={PlayersShow} />
        </Route>
        <Route path="/rb" component={RunningBacks} >
        </Route>
        <Route path="/wr" component={WideReceivers} >
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
