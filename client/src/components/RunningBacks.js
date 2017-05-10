import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import '../Positions.css'

class RunningBacks extends Component {

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

    function checkMflRB(player) {
      return player.name.position === "RB"
    }

    var rankedPlayers = adp.filter(checkMflRB)

    var topRB = rankedPlayers.slice(0, 40)

    return (
      <div>
        <PageHeader className="header1">Running Back Rankings <small>The Return of the Workhorse</small></PageHeader>
        <PageHeader className="header2">ADP <small>Check the Market</small></PageHeader>
        <div className="positionpic">
          <img className="positionimage" src={"http://itvdeportes.s3.amazonaws.com/wp-content/uploads/2016/01/MarshawLynch.jpg"} style={{height: '100%', width: '100%', margin: 'auto'}}/><br></br><br></br>
        </div>
        <div className="adpdata">
          <tr>
            <th><ol>{topRB.map(mflplayer =>
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
