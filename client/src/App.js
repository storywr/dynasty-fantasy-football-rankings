import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions/playerActions.js'
import { fetchPlayers } from './actions/playerActions.js'
import PlayerList from './PlayerList'

export class App extends Component {
  componentDidMount() {
    if (this.props.players.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchPlayers()
    }
  }
  render() {
    return (
      <div className="App">
        <PlayerList players={this.props.players} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {players: state.players}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
