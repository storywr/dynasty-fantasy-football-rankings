import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchPlayers } from  './actions/players.js'
import { fetchComments } from  './actions/comments.js'
import { Link } from 'react-router';
import {Navbar} from 'react-bootstrap'

export class App extends Component {
  componentDidMount() {
    if (this.props.players.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchPlayers(),
      this.props.actions.fetchComments()
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <h1>Dynasty Fantasy Football</h1>
              <a href="/players/rb">RB</a> <a href="/players/wr">WR</a> <a href="/players">ALL</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {players: state.players, comments: state.comments}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({ fetchPlayers, fetchComments }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
