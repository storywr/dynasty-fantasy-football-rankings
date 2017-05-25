import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchScore } from '../actions/score';
import { browserHistory } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import '../App.css'
import {Button, FormGroup, FormControl } from 'react-bootstrap';

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
    var LineChart = require("react-chartjs").Line;

    const playerStats = []
    if (this.state.score) {
      this.state.score.playerScores.playerScore.forEach(week => {
        if (week.score == "") {
          week.score = "0"
        }
        playerStats.push(week.score)
      })
    }
    const data = {
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16"
      ],
      datasets: [{
        label: "Player Stats",
        fillColor: "rgba(0, 0, 70, 0.8)",
        strokeColor: "rgba(200,200,200,0.2)",
  			pointColor: "rgba(200,200,200,0.2)",
  			pointStrokeColor: "#fff",
  			pointHighlightFill: "#fff",
  			pointHighlightStroke: "rgba(200,200,200,0.2)",
        data: playerStats
      }]
    }
    const options = {
      scaleGridLineColor : "rgba(200,200,200,0.2)",
      title: {
        display: true,
        text: 'Player Stats'
      },
    }

    return (
      <div>
        <PageHeader className="statsHeader">Find Player Stats <small>Numbers Don&#39;t Lie</small></PageHeader>
        <form className="newPlayerForm" onSubmit={(event) => this.handleOnSubmit(event)} >
          <FormControl
            type="text"
            placeholder="Year"
            onChange={(event) => this.handleOnYearChange(event)} /><br></br>
          <FormControl
            type="text"
            placeholder="Player Name"
            onChange={(event) => this.handleOnPlayerIDChange(event)} /><br></br>
          <Button type="submit">
            Get Fantasy Points
          </Button>
        </form><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        { (this.state.score) ?
          <div className="fantasyStats">
            <LineChart data={data} options={options} width="1000px" height="500px"/>
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
