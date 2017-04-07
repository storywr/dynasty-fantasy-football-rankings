import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { updateRanking } from  '../actions/players.js'
import { fetchplayers } from  '../actions/players.js'
import { bindActionCreators } from 'redux';
import '../App.css'
import '../Player.css'

class PlayerSearch extends Component {

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
        <PageHeader>{player.name} <small>{player.team}</small></PageHeader>
        <div className="playercard">
          <img src={player.pic}/><br></br><br></br>
          <h4>{player.position} #{player.positional_ranking}</h4>
          <ul className="comments">{comments.map(comment =>
            <li>{comment.summary}</li>
          )}</ul>
          <Link to={`/players/${player.id}/comments/new`}>Add Comment</Link><br></br><br></br>
          <button className="updateButton" onClick={(event) => this.handleMinusOnClick(event)} type="button">Raise Positional Rank</button><br></br><br></br>
          <button className="updateButton" onClick={(event) => this.handlePlusOnClick(event)} type="button">Lower Positional Rank</button>
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ updateRanking, fetchplayers }, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearch);
