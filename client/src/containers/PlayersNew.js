import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlayer } from '../actions/players';
import { fetchPlayers } from '../actions/players';
import { browserHistory } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import '../App.css'
import {Button, FormGroup, FormControl } from 'react-bootstrap';

class PlayersNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      position: '',
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.actions.addPlayer(this.state);
    this.props.actions.fetchPlayers();
    browserHistory.push(`/${this.state.position}`);
    this.props.actions.fetchPlayers();
  }

  handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnPositionChange(event) {
    this.setState({
      position: event.target.value
    });
  }

  handleOnTeamChange(event) {
    this.setState({
      team: event.target.value
    });
  }

  handleOnRankingChange(event) {
    this.setState({
      positional_ranking: event.target.value
    });
  }

  handleOnPicChange(event) {
    this.setState({
      pic: event.target.value
    });
  }

  render() {
    return (
      <div>
        <PageHeader className="newplayerheader">Add Player <small>Rankings</small></PageHeader>
        <form className="newPlayerForm" onSubmit={(event) => this.handleOnSubmit(event)} >
          <FormControl
            type="text"
            placeholder="Name"
            onChange={(event) => this.handleOnNameChange(event)} /><br></br>
          <FormControl
            type="text"
            placeholder="Position"
            onChange={(event) => this.handleOnPositionChange(event)} /><br></br>
          <FormControl
            type="text"
            placeholder="Team"
            onChange={(event) => this.handleOnTeamChange(event)} /><br></br>
          <FormControl
            type="text"
            placeholder="Positional Ranking"
            onChange={(event) => this.handleOnRankingChange(event)} /><br></br>
          <FormControl
            type="text"
            placeholder="Pic URL"
            onChange={(event) => this.handleOnPicChange(event)} /><br></br>
          <Button type="submit">
            Add Player
          </Button>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ addPlayer, fetchPlayers }, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(PlayersNew);
