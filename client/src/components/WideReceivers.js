import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import '../Positions.css'

class WideReceivers extends Component {

  render() {
    const mflplayers = this.props.mflplayers;
    const adp = this.props.adp;

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

    function checkMflWR(player) {
      return player.position === "WR"
    }

    rankedPlayers = rankedPlayers.filter(checkMflWR)

    const topWR = rankedPlayers.slice(0, 40)

    return (
      <div>
        <PageHeader className="header1">Wide Receiver Rankings <small>Straight Cash Homie</small></PageHeader>
        <PageHeader className="header2">ADP <small>Check the Market</small></PageHeader>
        <div className="positionpic">
          <img src={"https://s-media-cache-ak0.pinimg.com/originals/0d/34/ea/0d34ea2a4e192454162711f3e548cc22.jpg"} style={{height: '460px', width: '690px', margin: 'auto'}}/><br></br><br></br>
        </div>
        <div className="adpdata">
          <tr>
            <th><ol>{topWR.map(player =>
              <li>{player.name}</li>
            )}</ol></th>
          </tr>
        </div>
        <div className="players">
          <Carousel className="carousel">
            {this.props.players.map(player =>
              <Carousel.Item>
                <img width={100} height={135} alt="500x150" src={player.pic}/>
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
