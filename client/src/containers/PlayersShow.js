import React from 'react';
import { connect } from 'react-redux';

const PlayersShow = (props) => {
  const player = props.player;

  return (
    <div>
      <h2>{player.name}</h2>
      <img src={player.pic}/>
      <ul>
        <li>{player.team}</li>
        <li>Position: {player.position}</li>
        <li>Positional Ranking: {player.positional_ranking}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    player: state.players.find(player => player.id == ownProps.routeParams.id)
  };
};

export default connect(mapStateToProps)(PlayersShow);

// <li>{player.comments.map(comment =>
//   <p>{comment.summary}</p>
// )}</li>
