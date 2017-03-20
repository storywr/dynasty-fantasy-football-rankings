import React from 'react';
import { connect } from 'react-redux';

const PlayersShow = (props) => {
  const player = props.player;
  const comments = props.comments.filter(comment => comment.player_id === player.id)

  return (
    <div>
      <h2>{player.name}</h2>
      <img src={player.pic}/>
      <ul>
        <li>{player.team}</li>
        <li>Position: {player.position}</li>
        <li>Positional Ranking: {player.positional_ranking}</li>
        <li>{comments.map(comment =>
          <p>{comment.summary}</p>
        )}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    player: state.players.find(player => player.id == ownProps.routeParams.id),
    comments: state.comments
  };
};

export default connect(mapStateToProps)(PlayersShow);
