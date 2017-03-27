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

  var a3 = Object.keys(hash).map(function(key) {
      return hash[key];
  });

  a3 = a3.filter(player => player.averagePick > 0)

  a3.sort(function(a, b){
    return a.averagePick - b.averagePick
  })

  a3.forEach(player => {
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
      <ol>{a3.map(player =>
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
