import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';

const PlayersShow = (props) => {
  const player = props.player;
  const comments = props.comments.filter(comment => comment.player_id === player.id)

  return (
    <div>
      <h2>{player.name}</h2>
      <img src={player.pic}/>
      <p>Team: {player.team}</p>
      <p>Position: {player.position}</p>
      <p>Positional Ranking: {player.positional_ranking}</p>
      <p>Comments:
      <ul>{comments.map(comment =>
        <li>{comment.summary}</li>
      )}</ul></p>
      <Link to='/players/${player.id}/comments/new'>Add a Comment</Link>
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
