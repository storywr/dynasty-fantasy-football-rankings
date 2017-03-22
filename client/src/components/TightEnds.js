import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';

const TightEnds = (props) => {
  const players = props.players;

  return (
    <div>
      <PageHeader>Tight End Rankings <small>Gronk Smash</small></PageHeader>
      <img src={"https://static01.nyt.com/images/2015/01/21/sports/21patriots/21patriots-master1050.jpg"} style={{height: '600px', width: '900px', margin: 'auto'}}/><br></br><br></br>
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

function checkTE(player) {
  return player.position === "TE"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkTE)
  };
};

export default connect(mapStateToProps)(TightEnds);
