import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { updateRanking } from  '../actions/players.js'
import { fetchplayers } from  '../actions/players.js'
import { bindActionCreators } from 'redux';
import '../App.css'

class PlayersShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: props.player
    };
  }

  handleMinusOnClick(event) {
    this.state.player.positional_ranking--
    this.setState({
      player: this.state.player
    })
    this.props.actions.updateRanking(this.state.player)
    this.props.actions.fetchPlayers()
  }

  handlePlusOnClick(event) {
    this.state.player.positional_ranking++
    this.setState({
      player: this.state.player
    })
    this.props.actions.updateRanking(this.state.player)
    this.props.actions.fetchPlayers()
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
        <Link to={`/players/${player.id}/comments/new`}>Add Comment</Link><br></br><br></br>
        <button className="updateButton" onClick={(event) => this.handleMinusOnClick(event)} type="button">Increase Positional Rank</button><br></br><br></br>
        <button className="updateButton" onClick={(event) => this.handlePlusOnClick(event)} type="button">Lower Positional Rank</button>
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
    actions: bindActionCreators({ updateRanking, fetchplayers }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersShow);
