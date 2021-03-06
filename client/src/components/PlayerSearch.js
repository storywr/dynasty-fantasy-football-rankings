import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { updateRanking } from  '../actions/players.js'
import { fetchPlayers } from  '../actions/players.js'
import { fetchComments } from  '../actions/comments.js'
import { addComment } from '../actions/comments';
import { fetchProfile } from '../actions/profile';
import { fetchScore } from '../actions/score';
import { bindActionCreators } from 'redux';
import '../App.css'
import '../PlayerSearch.css'
import { Modal, OverlayTrigger, Button, Popover, Tooltip, FormGroup, FormControl } from 'react-bootstrap';

class PlayerSearch extends Component {

  constructor(props) {
    super(props);
    this.props.actions.fetchProfile({playerid: this.props.playerid})
    this.props.actions.fetchScore({year: "2016", playerid: this.props.playerid})
    this.state = {
      player: props.player,
      playerName: props.playerName,
      comments: props.comments,
      summary: '',
      player_id: props.player.id,
      profile: props.profile,
      score: props.score,
      selectedOption: "2016",
      showModal: false,
      showModalVideo: false
    };
    this.props.actions.fetchProfile({playerid: this.props.playerid})
    this.props.actions.fetchScore({year: "2016", playerid: this.props.playerid})
    this.handleOnOptionChange = this.handleOnOptionChange.bind(this)
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.closeVideo = this.closeVideo.bind(this)
    this.openVideo = this.openVideo.bind(this)
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  closeVideo() {
    this.setState({ showModalVideo: false });
  }

  openVideo() {
    this.setState({ showModalVideo: true });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      profile: this.props.profile,
      score: this.props.score,
      comments: this.props.comments
    });
  }

  handleOnOptionChange(event) {
    this.props.actions.fetchScore({year: event.target.value, playerid: this.props.playerid})
    this.setState({
      selectedOption: event.target.value,
      score: this.state.score
    });
    this.props.actions.fetchScore({year: event.target.value, playerid: this.props.playerid})
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
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    const player = this.props.player;
    const comments = this.props.comments.filter(comment => comment.player_id === player.id)
    const playerProfile = this.state.profile.playerProfile;
    var LineChart = require("react-chartjs").Line;

    var playerStats = []
    if (this.state.score) {
      this.state.score.playerScores.playerScore.forEach(week => {
        if (week.score == "") {
          week.score = "0"
        }
        playerStats.push(week.score)
      })
    }
    var total = 0
    var gamesArray = playerStats.filter(function(score) {
      return (score > 0)
    })
    for (var i = 0; i < playerStats.length; i++) {
      total += parseFloat(playerStats[i])
    }
    var ppg = total / gamesArray.length
    gamesArray.map(function(score) {
      return parseFloat(score)
    })
    var max = Math.max.apply(null, gamesArray)
    var min = Math.min.apply(null, gamesArray)
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
    const url = `https://www.youtube.com/embed?listType=search&list=${this.state.playerName}`

    return (
      <div>
        <PageHeader className="playerheader">{playerProfile.name.split(" ")[1]} {playerProfile.name.split(" ")[0].slice(0, -1)} <small>{player.team}</small></PageHeader>
          <div className="playercard">
            <div className="playerinfo">
              <img className="profilepic" src={player.pic || "http://i.nflcdn.com/static/site/7.5/img/video/poster-frames/poster-frame-280x210.jpg"}/><br></br>
              &nbsp;
              <h5>Age/DOB: {playerProfile.player.age} / {playerProfile.player.dob}</h5>
              <h5>Height: {playerProfile.player.height}</h5>
              <h5>Weight: {playerProfile.player.weight}</h5>
              <h5>ADP: {playerProfile.player.adp}</h5>
              &nbsp;
              <h5>Choose Stats Year: </h5>
              <form>
                <div className="radio">
                  <label>
                    <input type="radio" value="2016"
                    checked={this.state.selectedOption === '2016'}
                    onChange={this.handleOnOptionChange} />
                    2016
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="2015"
                    checked={this.state.selectedOption === '2015'}
                    onChange={this.handleOnOptionChange} />
                    2015
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="2014"
                    checked={this.state.selectedOption === '2014'}
                    onChange={this.handleOnOptionChange} />
                    2014
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="2013"
                    checked={this.state.selectedOption === '2013'}
                    onChange={this.handleOnOptionChange} />
                    2013
                  </label>
                </div>
              </form>
              &nbsp;
              { (player.name) ?
                <div>
                <Button
                  bsStyle="primary"
                  bsSize="large"
                  onClick={this.open}
                >
                  See Scouting Report
                </Button>
        ​
                <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Your Scouting Report</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>{player.position} #{player.positional_ranking}</h4>
                    <hr />
        ​                <div>
                          <ul className="comments">{comments.map(comment =>
                            <li>{comment.summary}</li>
                          )}</ul><br></br>
                          <form onSubmit={(event) => this.handleOnSubmit(event)} >
                            <FormControl
                              componentClass="textarea"
                              ref="scouting"
                              type="textarea"
                              onChange={(event) => this.handleOnSummaryChange(event)} /><br></br>
                            <Button type="submit">
                              Add Comment
                            </Button>
                          </form>
                        </div>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
                </div>
                : <h4>You have not added this player to your Rankings!</h4>
              }
              &nbsp;
              <div>
              <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.openVideo}
              >
                Go to the Game Tape
              </Button>
      ​
              <Modal bsSize="large" show={this.state.showModalVideo} onHide={this.closeVideo}>
                <Modal.Header closeButton>
                  <Modal.Title>Go to the Game Tape!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe id="player" type="text/html"
                  src={url}
                  frameborder="0">
                </iframe>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.closeVideo}>Close</Button>
                </Modal.Footer>
              </Modal>
              </div>
          </div>
        </div>
        <div className="fantasy">
          <h3 className="chartTitle">{this.state.selectedOption} Fantasy Points</h3>
          <LineChart data={data} options={options} width="800px" height="400px"/><br></br><br></br>
          &nbsp;
          <p> Avg: {ppg.toFixed(2)}</p>
          <p> Max: {max}</p>
          <p> Min: {min}</p>
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
    comments: state.comments,
    playerid: ownProps.routeParams.id,
    profile: state.profile,
    score: state.score,
    playerName: ownProps.routeParams.name.trim()
  };
};

function searchPlayers(player, ownProps) {
  if (player.name === ownProps.routeParams.name.trim()) {
    return player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ updateRanking, fetchPlayers, fetchComments, addComment, fetchProfile, fetchScore }, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearch);
