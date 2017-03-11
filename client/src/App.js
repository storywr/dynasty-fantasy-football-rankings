import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import PlayerList from './PlayerList'
import {connect} from 'react-redux'
import * as actions from './actions/playerActions.js'
import PlayerInput from './components/PlayerInput'
import Players from './components/Players'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Players</h2>
        <PlayerInput store={this.props.store} />
        <Players store={this.props.store} />
        <PlayerList playerList={this.props.playerNames} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {playerNames: state.players.names}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
