import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import '../Positions.css'

class RunningBacks extends Component {

  render() {
    var mflplayers = this.props.mflplayers;
    var adp = this.props.adp;
    var players = this.props.players;
    var yahoolists = this.props.yahoolists

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

    yahoolists.forEach(player => {
      player.mfl = adp.find(mflplayer => mflplayer.name.name.trim() == player.name)
    })

    function checkMflRB(player) {
      return player.name.position === "RB"
    }

    var rankedPlayers = adp.filter(checkMflRB)

    var topRB = rankedPlayers.slice(0, 40)

    return (
      <div>
        <PageHeader className="header1">Running Back Rankings <small>The Return of the Workhorse</small></PageHeader>
        <div className="positionpic">
        </div>
        <div className="players">
          <Carousel className="carousel">
            {yahoolists.map(player =>
              <Carousel.Item>
                <img width={250} height={250} src={"https://" + player.pic}/>
                <Carousel.Caption>
                  { (player.mfl)
                    ? <h2>{player.positional_ranking}. <Link to={`/player/${player.name}/${player.mfl.id}`}>{ player.name }</Link> - { player.team }</h2>
                    : <h2>{player.positional_ranking}. { player.name }</h2>
                  }
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
        <PageHeader className="header2">Average Draft Position <small>Check the Market</small></PageHeader>
        <div className="dataContainter">
          <div className="adpdata">
            <tr>
              <ol>{topRB.map(mflplayer =>
                <Link to={`/player/${mflplayer.name.name}/${mflplayer.name.id}`}><li>{mflplayer.name.name}</li></Link>
              )}</ol>
            </tr>
          </div>
        </div>
      </div>
    );
  };
}

function checkRB(player) {
  return player.position === "RB"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkRB).sort(function(a, b){
      return a.positional_ranking - b.positional_ranking
    }),
    mflplayers: state.mflplayers.players.player,
    adp: state.adp.adp.player,
    yahoolists: state.yahoolists.filter(checkRB).sort(function(a, b){
      return a.positional_ranking - b.positional_ranking
    }),
  };
};

export default connect(mapStateToProps)(RunningBacks);
