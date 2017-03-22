import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';

const Quarterbacks = (props) => {
  const players = props.players;

  return (
    <div>
      <PageHeader>Quarterback Rankings <small>Going Deep</small></PageHeader>
      <img src={"https://static01.nyt.com/images/2015/01/20/sports/20patriots1/20patriots1-master1050.jpg"} style={{height: '600px', width: '900px', margin: 'auto'}}/><br></br><br></br>
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

function checkQB(player) {
  return player.position === "QB"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkQB)
  };
};

export default connect(mapStateToProps)(Quarterbacks);
