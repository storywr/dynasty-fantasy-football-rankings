import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';

class Quarterbacks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: props.players.sort(function(a, b){
        return a.positional_ranking - b.positional_ranking
      })
    };
  }

  render() {
    const players = this.state.players;
    return (
      <div>
        <PageHeader>Running Back Rankings <small>The Return of the Workhorse</small></PageHeader>
        <img src={"https://static01.nyt.com/images/2015/10/16/sports/16FALCONSweb2/16FALCONSweb2-master1050.jpg"} style={{height: '600', width: '900px', margin: 'auto'}}/><br></br><br></br>
          <Carousel>
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
    );
  };
}

function checkQB(player) {
  return player.position === "QB"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkQB)
  };
};

export default connect(mapStateToProps)(Quarterbacks);
