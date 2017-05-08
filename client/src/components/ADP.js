import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import '../App.css'
import '../adp.css'

class ADP extends Component {

    render() {
      var mflplayers = this.props.mflplayers;
      var adp = this.props.adp;

      adp.forEach(player => {
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

      return (
        <div>
          <PageHeader className="adp">ADP <small>Check the Market</small></PageHeader>
          <ol>{adp.map(player =>
            <Link to={`/player/${player.name.name}/${player.id}`}><li>{player.name.name} - {player.name.position}</li></Link>
          )}</ol>
        </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    mflplayers: state.mflplayers.players.player,
    adp: state.adp.adp.player
  };
};

export default connect(mapStateToProps)(ADP);
