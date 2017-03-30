import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import '../App.css'

class PlayerSearch extends Component {

  render() {
    const player = this.props.player;
    const comments = this.props.comments.filter(comment => comment.player_id === player.id)

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
        <Link to={`/players/${player.id}/comments/new`}>Add Comment</Link><br></br><br></br>
        <button className="updateButton" onClick={(event) => this.handleMinusOnClick(event)} type="button">Raise Positional Rank</button><br></br><br></br>
        <button className="updateButton" onClick={(event) => this.handlePlusOnClick(event)} type="button">Lower Positional Rank</button>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  var foundPlayer = ""
  state.players.forEach(function(player){
    if (searchPlayers(player, ownProps)) {
      foundPlayer = searchPlayers(player, ownProps)
    }
  })
  return {
    player: foundPlayer,
    comments: state.comments
  };
};

function searchPlayers(player, ownProps) {
  if (player.name === ownProps.routeParams.name.trim()) {
    return player
  }
}

export default connect(mapStateToProps)(PlayerSearch);
