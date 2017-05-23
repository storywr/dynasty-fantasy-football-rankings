import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchScore } from '../actions/score';
import { browserHistory } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import '../App.css'

class Stats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerid: '',
      year: '',
      playerName: '',
      mflplayers: this.props.mflplayers
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      score: this.props.score,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.state.mflplayers.forEach(player => {
      var fullName = player.name
      fullName = fullName.split(',');
      var lastName = fullName[0]
      var firstName = fullName[1]
      if (firstName != null) {
        player.name = firstName.concat(" ")
        player.name = player.name.concat(lastName)
      }
    })
    const playerName = this.state.playerName
    function searchPlayers(player) {
      if (player.name.trim() === playerName.trim()) {
        return player
      }
    }
    var foundPlayer = ""
    this.state.mflplayers.forEach(function(player){
      if (searchPlayers(player)) {
        foundPlayer = searchPlayers(player)
      }
    })
    this.props.actions.fetchScore({year: this.state.year, playerid: foundPlayer.id});
    console.log(this.state);
    this.props.actions.fetchScore({year: this.state.year, playerid: foundPlayer.id});
  }

  handleOnYearChange(event) {
    this.setState({
      year: event.target.value
    })
  }

  handleOnPlayerIDChange(event) {
    this.setState({
      playerName: event.target.value
    })
  }


  render() {
    return (
      <div>
        <PageHeader className="stats">Find Player Stats <small>You Should Work for PFF You NERD</small></PageHeader>
        <form className="newPlayerForm" onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            placeholder="Year"
            onChange={(event) => this.handleOnYearChange(event)} /><br></br><br></br>
          <input
            type="text"
            placeholder="Player Name"
            onChange={(event) => this.handleOnPlayerIDChange(event)} /><br></br><br></br>
          <input
            type="submit"
            value="Get Fantasy Points" />
        </form><br></br><br></br><br></br><br></br><br></br>
        { (this.state.score) ?
          <div className="fantasy">
            <h4>Fantasy Points</h4>
            <tr className="fantasyPoints">
              <tr><ol>{this.state.score.playerScores.playerScore.map(week =>
                <li>{week.score}</li>
              )}</ol></tr>
            </tr>
          </div>
          : <h3></h3>
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
    mflplayers: state.mflplayers.players.player
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ fetchScore }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
