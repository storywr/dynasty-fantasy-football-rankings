import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const RunningBacks = (props) => {
  const players = props.players;

  return (
    <div>
      <h3>Running Back Rankings</h3>
      <img src={"https://static01.nyt.com/images/2015/10/16/sports/16FALCONSweb2/16FALCONSweb2-master1050.jpg"}/><br></br><br></br>
        {players.map(player =>
          <div>
            <p>{player.positional_ranking} - <Link to={`/players/${player.id}`}>{ player.name }</Link></p>
            <img src={player.pic}/><br></br><br></br>
          </div>
        )}
    </div>
  );
};

function checkRB(player) {
  return player.position === "RB"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkRB)
  };
};

export default connect(mapStateToProps)(RunningBacks);
