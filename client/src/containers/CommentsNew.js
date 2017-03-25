import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../actions/comments';
import { fetchComments } from  '../actions/comments.js'
import { browserHistory } from 'react-router';
import '../App.css'

class CommentsNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      summary: '',
      player_id: props.player.id
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.actions.addComment(this.state);
    this.props.actions.fetchComments()
    browserHistory.push(`/players/${this.state.player_id}`);
    this.props.actions.fetchComments()
  }

  handleOnSummaryChange(event) {
    this.setState({
      summary: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>Add a Comment</h3>
        <form className="myForm" onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="textarea"
            className="summaryBox"
            placeholder="Summary"
            onChange={(event) => this.handleOnSummaryChange(event)} /><br></br><br></br>
          <input
            type="submit"
            value="Add Comment" />
        </form>
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
    actions: bindActionCreators({ addComment, fetchComments }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsNew);
