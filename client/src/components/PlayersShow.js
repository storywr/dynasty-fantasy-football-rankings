import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { updateRanking } from  '../actions/players.js'
import { bindActionCreators } from 'redux';

class PlayersShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: props.player
    };
  }

  handleOnClick(event) {
    this.state.player.positional_ranking--
    this.setState({
      player: this.state.player
    })
    this.props.actions.updateRanking(this.state.player)
  }

  render() {
    const player = this.state.player;
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
        <Link to={`/players/${player.id}/comments/new`}>Add Comment</Link>
        <button onClick={(event) => this.handleOnClick(event)} type="button">Lower Positional Rank</button>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    player: state.players.find(player => player.id == ownProps.routeParams.id),
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ updateRanking }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersShow);
