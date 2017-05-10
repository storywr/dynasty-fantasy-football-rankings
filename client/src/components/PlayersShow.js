import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { updateRanking } from  '../actions/players.js'
import { fetchPlayers } from  '../actions/players.js'
import { fetchComments } from  '../actions/comments.js'
import { addComment } from '../actions/comments';
import { bindActionCreators } from 'redux';
import '../App.css'
import '../Player.css'

class PlayersShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: props.player,
      comments: props.comments,
      summary: '',
      player_id: props.player.id,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      comments: this.props.comments
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.actions.fetchComments()
    this.props.actions.addComment(this.state);
    this.props.actions.fetchComments()
    this.refs.scouting.value = ""
  }

  handleOnSummaryChange(event) {
    this.setState({
      summary: event.target.value
    });
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
        <PageHeader className="playerheadershow">{player.name} <small>{player.team}</small></PageHeader>
        <div className="playershow">
          <div className="playercardshow">
            <div className="playerinfoshow">
              <img className="profilepicshow" src={player.pic}/><br></br><br></br>
              <h4>Your Scouting Report</h4>
              <h4>{player.position} #{player.positional_ranking}
              &nbsp;
              <button className="updateButton" onClick={(event) => this.handleMinusOnClick(event)} type="button">+</button>
              <button className="updateButton" onClick={(event) => this.handlePlusOnClick(event)} type="button">-</button>
              </h4>
              <ul className="comments">{comments.map(comment =>
                <li>{comment.summary}</li>
              )}</ul><br></br>
              <form className="myFormshow" onSubmit={(event) => this.handleOnSubmit(event)} >
                <input
                  ref="scouting"
                  type="textarea"
                  className="summaryBox"
                  onChange={(event) => this.handleOnSummaryChange(event)} /><br></br><br></br>
                <input
                  type="submit"
                  value="Add Comment" />
              </form>
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
    actions: bindActionCreators({ updateRanking, fetchPlayers, fetchComments, addComment }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersShow);
