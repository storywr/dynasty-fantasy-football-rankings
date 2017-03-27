import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchPlayers } from  './actions/players.js'
import { fetchMyFantasyLeaguePlayers } from  './actions/mflplayers.js'
import { fetchMyFantasyLeagueADP } from  './actions/players.js'
import { fetchComments } from  './actions/comments.js'
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import './App.css'
import styles from './App.css'

export class App extends Component {
  componentDidMount() {
    if (this.props.players.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchPlayers(),
      this.props.actions.fetchMyFantasyLeaguePlayers(),
      // this.props.actions.fetchMyFantasyLeagueADP(),
      this.props.actions.fetchComments()
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><Link to="/">Dynasty Fantasy Football Rankings</Link></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#"><Link to="/rb">RB</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to="/wr">WR</Link></NavItem>
            <NavItem eventKey={3} href="#"><Link to="/qb">QB</Link></NavItem>
            <NavItem eventKey={4} href="#"><Link to="/te">TE</Link></NavItem>
            <NavItem eventKey={5} href="#"><Link to="/adp">ADP</Link></NavItem>
            <NavItem eventKey={6} href="#"><Link to="/players/new">Add Player</Link></NavItem>
          </Nav>
        </Navbar>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {players: state.players, comments: state.comments, mflplayers: state.mflplayers, adp: state.adp}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({ fetchPlayers, fetchComments, fetchMyFantasyLeaguePlayers, fetchMyFantasyLeagueADP}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
