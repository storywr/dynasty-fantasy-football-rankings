import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchPlayers } from  './actions/players.js'
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
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {players: state.players}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({ fetchPlayers }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
