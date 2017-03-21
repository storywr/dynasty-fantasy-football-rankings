import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const WideReceivers = (props) => {
  const players = props.players;

  return (
    <div>
      <h3>Wide Receiver Rankings</h3>
      <img src={"https://s-media-cache-ak0.pinimg.com/originals/0d/34/ea/0d34ea2a4e192454162711f3e548cc22.jpg"} style={{height: '700px', width: '1050px', margin: 'auto'}}/><br></br><br></br>
        {players.map(player =>
          <div>
            <p>{player.positional_ranking} - <Link to={`/players/${player.id}`}>{ player.name }</Link></p>
            <img src={player.pic}/><br></br><br></br>
          </div>
        )}
    </div>
  );
};

function checkWR(player) {
  return player.position === "WR"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkWR)
  };
};

export default connect(mapStateToProps)(WideReceivers);
