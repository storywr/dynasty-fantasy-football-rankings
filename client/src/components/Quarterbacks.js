import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Quarterbacks = (props) => {
  const players = props.players;

  return (
    <div>
      <h3>Quarterback Rankings</h3>
      <img src={"https://static01.nyt.com/images/2015/01/20/sports/20patriots1/20patriots1-master1050.jpg"} style={{height: '700px', width: '1050px', margin: 'auto'}}/><br></br><br></br>
        {players.map(player =>
          <div>
            <p>{player.positional_ranking} - <Link to={`/players/${player.id}`}>{ player.name }</Link></p>
            <img src={player.pic}/><br></br><br></br>
          </div>
        )}
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
