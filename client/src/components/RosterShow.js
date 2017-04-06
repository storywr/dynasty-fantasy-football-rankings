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

    rosterplayers.forEach(player => {
      var fullName = player.name.name
      fullName = fullName.split(',');
      var lastName = fullName[0]
      var firstName = fullName[1]
      player.name.name = firstName.concat(" ")
      player.name.name = player.name.name.concat(lastName)
    })

    return (
      <div>
        <ul>{rosterplayers.map(player =>
          <Link to={`/player/${player.name.name}`}><li>{player.name.name}</li></Link>
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
