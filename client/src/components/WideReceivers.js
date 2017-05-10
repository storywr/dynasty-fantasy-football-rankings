import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import '../Positions.css'

class WideReceivers extends Component {

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

    function checkMflWR(player) {
      return player.name.position === "WR"
    }

    var rankedPlayers = adp.filter(checkMflWR)

    var topWR = rankedPlayers.slice(0, 40)

    return (
      <div>
        <PageHeader className="header1">Wide Receiver Rankings <small>Straight Cash Homie</small></PageHeader>
        <div className="positionpic">
          <img className="positionimage" src={"https://s-media-cache-ak0.pinimg.com/originals/0d/34/ea/0d34ea2a4e192454162711f3e548cc22.jpg"} style={{height: '100%', width: '100%', margin: 'auto'}}/><br></br><br></br>
        </div>
        <div className="adpdata">
          <tr>
            <th><ol>{topWR.map(mflplayer =>
              <Link to={`/player/${mflplayer.name.name}/${mflplayer.name.id}`}><li>{mflplayer.name.name}</li></Link>
            )}</ol></th>
          </tr>
        </div>
        <div className="players">
          <Carousel className="carousel">
            {this.props.players.map(player =>
              <Carousel.Item>
                <img width={120} height={156} alt="500x150" src={player.pic}/>
                <Carousel.Caption>
                  <h2>{player.positional_ranking} - <Link to={`/players/${player.id}`}>{ player.name }</Link></h2>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      </div>
    );
  };
}

function checkWR(player) {
  return player.position === "WR"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkWR).sort(function(a, b){
      return a.positional_ranking - b.positional_ranking
    }),
    mflplayers: state.mflplayers.players.player,
    adp: state.adp.adp.player
  };
};

export default connect(mapStateToProps)(WideReceivers);
