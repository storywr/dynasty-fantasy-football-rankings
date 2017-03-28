import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';

class WideReceivers extends Component {

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
        <PageHeader>Wide Receiver Rankings <small>Straight Cash Homie</small></PageHeader>
        <img src={"https://s-media-cache-ak0.pinimg.com/originals/0d/34/ea/0d34ea2a4e192454162711f3e548cc22.jpg"} style={{height: '600', width: '900px', margin: 'auto'}}/><br></br><br></br>
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

function checkWR(player) {
  return player.position === "WR"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkWR)
  };
};

export default connect(mapStateToProps)(WideReceivers);
