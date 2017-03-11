import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import PlayerList from './PlayerList'
import {connect} from 'react-redux'
import * as actions from './actions/playerActions.js'

class App extends Component {
  componentDidMount() {
    if (this.props.playerNames.length === 0) {
      this.props.actions.fetchPlayers()
    }
  }
  render() {
    return (
      <div className="App">
        <h2>Players</h2>
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
