import React from 'react';
import { connect } from 'react-redux';

const PlayersShow = (props) => {
  const player = props.player;

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Position: {player.position}</p>
      <p>Rating: {player.rating}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    player: state.players.find(player => player.id == ownProps.routeParams.id)
  };
};

export default connect(mapStateToProps)(PlayersShow);
