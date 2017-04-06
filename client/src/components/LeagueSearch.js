import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMyLeague } from '../actions/league';
import { PageHeader } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import '../App.css'

class LeagueSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      LeagueID: '',
    };
  }

  handleOnLeagueChange(event) {
    this.setState({
      LeagueID: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state.LeagueID);
    this.props.actions.fetchMyLeague(this.state.LeagueID);
    browserHistory.push('/');
  }

  render() {

    return (
      <div>
        <PageHeader className="positionheader">Find Your League</PageHeader><br></br><br></br>
        <form className="myForm" onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            placeholder="LeagueID"
            onChange={(event) => this.handleOnLeagueChange(event)} /><br></br>
          <input
            type="submit"
            value="Find League" />
        </form>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ fetchMyLeague }, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(LeagueSearch);
