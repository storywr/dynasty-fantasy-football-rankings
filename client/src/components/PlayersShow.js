import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

const PlayersShow = (props) => {
  const player = props.player;
  const comments = props.comments.filter(comment => comment.player_id === player.id)

  return (
    <div>
      <PageHeader>{player.name} <small>{player.team}</small></PageHeader>
      <img src={player.pic}/><br></br><br></br>
      <p>Position: {player.position}</p>
      <p>Positional Ranking: {player.positional_ranking}</p>
      <h5>Comments:</h5>
      <ul>{comments.map(comment =>
        <li>{comment.summary}</li>
      )}</ul>
      <Link to={`/players/${player.id}/comments/new`}>Add Comment</Link>
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
