import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import PlayerList from './PlayerList'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/playerAction.js'

export class App extends Component {
  componentDidMount() {
    if (this.props.playerPics.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchPlayers()
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">PlayerBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <PlayerList playerPics={this.props.playerPics} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('in map state to props')
  return {playerPics: state.players.pictures}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
