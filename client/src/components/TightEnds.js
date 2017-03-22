import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const TightEnds = (props) => {
  const players = props.players;

  return (
    <div>
      <h3>Tight End Rankings</h3>
      <img src={"https://static01.nyt.com/images/2015/01/21/sports/21patriots/21patriots-master1050.jpg"} style={{height: '700px', width: '1050px', margin: 'auto'}}/><br></br><br></br>
        {players.map(player =>
          <div>
            <p>{player.positional_ranking} - <Link to={`/players/${player.id}`}>{ player.name }</Link></p>
            <img src={player.pic}/><br></br><br></br>
          </div>
        )}
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
