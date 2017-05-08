import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import '../App.css'
import '../Roster.css'

class RosterShow extends Component {

  render() {
    var mflplayers = this.props.mflplayers;
    var rosterplayers = this.props.roster.player;

    rosterplayers.forEach(player => {
      player.name = mflplayers.find(mflplayer => mflplayer.id == player.id);
      var fullName = player.name.name
      fullName = fullName.split(',');
      var lastName = fullName[0]
      var firstName = fullName[1]
      if (firstName != null) {
        player.name.name = firstName.concat(" ")
        player.name.name = player.name.name.concat(lastName)
      }
    })

    function checkQB(player) {
      return player.name.position === "QB"
    }
    var qbs = rosterplayers.filter(checkQB)

    function checkRB(player) {
      return player.name.position === "RB"
    }
    var rbs = rosterplayers.filter(checkRB)

    function checkWR(player) {
      return player.name.position === "WR"
    }
    var wrs = rosterplayers.filter(checkWR)

    function checkTE(player) {
      return player.name.position === "TE"
    }
    var tes = rosterplayers.filter(checkTE)

    function checkDef(player) {
      return player.name.position === "Def"
    }
    var defs = rosterplayers.filter(checkDef)

    function checkPK(player) {
      return player.name.position === "PK"
    }
    var pks = rosterplayers.filter(checkPK)

    return (
      <div className="roster">
        <PageHeader className="headerroster">Roster <small></small></PageHeader>
        <div className="qbs">
        <h4>Quarterbacks</h4>
          <p>{qbs.map(player =>
            <Link to={`/player/${player.name.name}/${player.name.id}`}><p>{player.name.name} - {player.name.team}</p></Link>
          )}</p>
        </div>
        <div className="rbs">
        <h4>Running Backs</h4>
          <p>{rbs.map(player =>
            <Link to={`/player/${player.name.name}/${player.name.id}`}><p>{player.name.name} - {player.name.team}</p></Link>
          )}</p>
        </div>
        <div className="wrs">
        <h4>Wide Receivers</h4>
          <p>{wrs.map(player =>
            <Link to={`/player/${player.name.name}/${player.name.id}`}><p>{player.name.name} - {player.name.team}</p></Link>
          )}</p>
        </div>
        <div className="tes">
        <h4>Tight Ends</h4>
          <p>{tes.map(player =>
            <Link to={`/player/${player.name.name}/${player.name.id}`}><p>{player.name.name} - {player.name.team}</p></Link>
          )}</p>
        </div>
        <div className="defs">
        <h4>Defense & Special Teams</h4>
          <p>{defs.map(player =>
            <Link to={`/player/${player.name.name}/${player.name.id}`}><p>{player.name.name} - {player.name.team}</p></Link>
          )}</p>
        </div>
        <div className="pks">
        <h4>Place Kickers</h4>
          <p>{pks.map(player =>
            <Link to={`/player/${player.name.name}/${player.name.id}`}><p>{player.name.name} - {player.name.team}</p></Link>
          )}</p>
        </div>
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
