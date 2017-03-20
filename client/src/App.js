import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchPlayers } from  './actions/players.js'
import PlayerList from './PlayerList'
import { Link } from 'react-router';

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
        <h3><Link to={`/rb`}>Running Back Rankings</Link></h3>
        <h3><Link to={`/wr`}>Wide Receiver Rankings</Link></h3>
        <h3><Link to={`/players`}>Player List</Link></h3>
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
