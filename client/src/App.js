import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchPlayers } from  './actions/players.js'
import { fetchMyFantasyLeaguePlayers } from  './actions/mflplayers.js'
import { fetchMyFantasyLeagueADP } from  './actions/adp.js'
import { fetchMyLeague } from  './actions/league.js'
import { fetchComments } from  './actions/comments.js'
import { fetchProfile } from  './actions/profile.js'
import { fetchScore } from  './actions/score.js'
import { fetchYahoolists } from  './actions/yahoolists.js'
import { fetchYPlayers } from  './actions/yplayers.js'
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import './App.css'
import styles from './App.css'

export class App extends Component {
  componentDidMount() {
    this.props.actions.fetchProfile({playerid: '11679'})
    this.props.actions.fetchScore({year: 2016, playerid: '11679'})
    if (this.props.players.length === 0) {
      this.props.actions.fetchPlayers()
    }
    if (this.props.mflplayers.length === 0) {
      this.props.actions.fetchMyFantasyLeaguePlayers()
    }
    if (this.props.adp.length === 0) {
      this.props.actions.fetchMyFantasyLeagueADP()
    }
    if (this.props.comments.length === 0) {
      this.props.actions.fetchComments()
    }
    if (this.props.league.length === 0) {
      this.props.actions.fetchMyLeague()
    }
    if (this.props.yahoolists.length === 0) {
      this.props.actions.fetchYahoolists()
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
            <NavItem eventKey={1} href="#"><Link to="/stats">Stat Finder</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to="/rb">RB</Link></NavItem>
            <NavItem eventKey={3} href="#"><Link to="/wr">WR</Link></NavItem>
            <NavItem eventKey={4} href="#"><Link to="/qb">QB</Link></NavItem>
            <NavItem eventKey={5} href="#"><Link to="/te">TE</Link></NavItem>
            <NavItem eventKey={6} href="#"><Link to="/adp">ADP</Link></NavItem>
            <NavItem eventKey={7} href="#"><Link to="/league">League</Link></NavItem>
            <NavItem eventKey={8} href="#"><Link to="/players/new">Add Player</Link></NavItem>
            <NavItem className="git" eventKey={9} href="https://github.com/storywr/fantasy-football-scout">Github Repo</NavItem>
            <a href="https://github.com/storywr/fantasy-football-scout">
              <img className = "gitLogo" width={40} height={40} src="https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png"/>
            </a>
          </Nav>
        </Navbar>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {players: state.players, comments: state.comments, mflplayers: state.mflplayers, adp: state.adp, league: state.league, profile: state.profile, score: state.score, yahoolists: state.yahoolists, yplayers: state.yplayers}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({ fetchPlayers, fetchComments, fetchMyFantasyLeaguePlayers, fetchMyFantasyLeagueADP, fetchMyLeague, fetchProfile, fetchScore, fetchYahoolists, fetchYPlayers }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
