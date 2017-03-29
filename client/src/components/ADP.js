import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import '../App.css'

const ADP = (props) => {

  const mflplayers = props.mflplayers;
  const adp = props.adp;

  var hash = Object.create(null);

  mflplayers.concat(adp).forEach(function(obj) {
      hash[obj.id] = Object.assign(hash[obj.id] || {}, obj);
  });

  var rankedPlayers = Object.keys(hash).map(function(key) {
      return hash[key];
  });

  rankedPlayers = rankedPlayers.filter(player => player.averagePick > 0)

  rankedPlayers.sort(function(a, b){
    return a.averagePick - b.averagePick
  })

  rankedPlayers.forEach(player => {
    var fullName = player.name
    fullName = fullName.split(',');
    var lastName = fullName[0]
    var firstName = fullName[1]
    player.name = firstName.concat(" ")
    player.name = player.name.concat(lastName)
  })

  return (
    <div className="adp">
      <PageHeader>ADP <small>Check the Market</small></PageHeader>
      <ol>{rankedPlayers.map(player =>
        <li>{player.name} - {player.position}</li>
      )}</ol>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mflplayers: state.mflplayers.players.player,
    adp: state.adp.adp.player
  };
};

export default connect(mapStateToProps)(ADP);
