import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { updateRanking } from  '../actions/players.js'
import { fetchPlayers } from  '../actions/players.js'
import { fetchComments } from  '../actions/comments.js'
import { bindActionCreators } from 'redux';
import '../App.css'
import '../Player.css'

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
    const player = this.props.player;
    const comments = this.props.comments.filter(comment => comment.player_id === player.id)

    return (
      <div>
        <PageHeader className="playerheader">{player.name} <small>{player.team}</small></PageHeader>
        <div className="player">
          <div className="playercard">
            <div className="playerinfo">
              <img className="profilepic" src={player.pic}/><br></br><br></br>
              <h4>{player.position} #{player.positional_ranking}
              &nbsp;
              <button className="updateButton" onClick={(event) => this.handleMinusOnClick(event)} type="button">+</button>
              <button className="updateButton" onClick={(event) => this.handlePlusOnClick(event)} type="button">-</button>
              </h4>
              <ul className="comments">{comments.map(comment =>
                <li>{comment.summary}</li>
              )}</ul><br></br>
              <Link to={`/players/${player.id}/comments/new`}>Add Comment</Link><br></br><br></br>
            </div>
          </div>
        </div>
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
    actions: bindActionCreators({ updateRanking, fetchPlayers, fetchComments }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersShow);
