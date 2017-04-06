import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import '../App.css'

class RosterShow extends Component {

  render() {

    return (
      <div>
        <ul>{this.props.roster.player.map(player =>
          <li>{player.id}</li>
        )}</ul>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    roster: state.rosters.rosters.franchise.find(roster => roster.id == ownProps.routeParams.id)
  };
};

export default connect(mapStateToProps)(RosterShow);
