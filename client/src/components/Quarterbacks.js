import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import '../Positions.css'

class Quarterbacks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: props.players.sort(function(a, b){
        return a.positional_ranking - b.positional_ranking
      }),
      mflplayers: props.mflplayers,
      adp: props.adp
    };
  }

  render() {
    const players = this.state.players;
    const mflplayers = this.state.mflplayers;
    const adp = this.state.adp;

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

    function checkMflQB(player) {
      return player.position === "QB"
    }

    a3 = a3.filter(checkMflQB)

    const topQB = a3.slice(0, 40)

    return (
      <div>
        <PageHeader className="header1">Quarterback Rankings <small>The Return of the Workhorse</small></PageHeader>
        <PageHeader className="header2">ADP <small>Check the Market</small></PageHeader>
        <div className="positionpic">
          <img src={"https://static01.nyt.com/images/2015/01/20/sports/20patriots1/20patriots1-master1050.jpg"} style={{height: '600', width: '900px', margin: 'auto'}}/><br></br><br></br>
        </div>
        <div className="adpdata">
          <tr>
            <th><ol>{topQB.map(player =>
              <li>{player.name}</li>
            )}</ol></th>
          </tr>
        </div>
        <div className="players">
          <Carousel className="carousel">
            {players.map(player =>
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

function checkQB(player) {
  return player.position === "QB"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkQB),
    mflplayers: state.mflplayers.players.player,
    adp: state.adp.adp.player
  };
};

export default connect(mapStateToProps)(Quarterbacks);
