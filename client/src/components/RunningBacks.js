import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import '../Positions.css'

class RunningBacks extends Component {

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

    function checkMflRB(player) {
      return player.position === "RB"
    }

    rankedPlayers = rankedPlayers.filter(checkMflRB)

    const topRB = rankedPlayers.slice(0, 40)

    return (
      <div>
        <PageHeader className="header1">Running Back Rankings <small>The Return of the Workhorse</small></PageHeader>
        <PageHeader className="header2">ADP <small>Check the Market</small></PageHeader>
        <div className="positionpic">
          <img src={"https://static01.nyt.com/images/2015/10/16/sports/16FALCONSweb2/16FALCONSweb2-master1050.jpg"} style={{height: '460px', width: '690px', margin: 'auto'}}/><br></br><br></br>
        </div>
        <div className="adpdata">
          <tr>
            <th><ol>{topRB.map(mflplayer =>
              <Link to={`/player/${mflplayer.name}`}><li>{mflplayer.name}</li></Link>
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

function checkRB(player) {
  return player.position === "RB"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkRB).sort(function(a, b){
      return a.positional_ranking - b.positional_ranking
    }),
    mflplayers: state.mflplayers.players.player,
    adp: state.adp.adp.player
  };
};

export default connect(mapStateToProps)(RunningBacks);
