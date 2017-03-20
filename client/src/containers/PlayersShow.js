import React from 'react';
import { connect } from 'react-redux';

const PlayersShow = (props) => {
  const player = props.player;

  return (
    <div>
      <h2>{player.name}</h2>
      <img src={player.pic}/>
      <p>Position: {player.position}</p>
      <p>Positional Ranking: {player.positional_ranking}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    player: state.players.find(player => player.id == ownProps.routeParams.id)
  };
};

export default connect(mapStateToProps)(PlayersShow);
