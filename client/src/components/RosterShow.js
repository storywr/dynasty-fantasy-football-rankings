import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import '../App.css'

class RosterShow extends Component {

  render() {
    const mflplayers = this.props.mflplayers;
    const rosterplayers = this.props.roster.player;

    rosterplayers.forEach(player => {
      player.name = mflplayers.find(mflplayer => mflplayer.id == player.id)
    })

    return (
      <div>
        <ul>{rosterplayers.map(player =>
          <li>{player.name.name}</li>
        )}</ul>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    mflplayers: state.mflplayers.players.player,
    roster: state.rosters.rosters.franchise.find(roster => roster.id == ownProps.routeParams.id)
  };
};

export default connect(mapStateToProps)(RosterShow);
