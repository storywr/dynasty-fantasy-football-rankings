import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../actions/comments';
import { browserHistory } from 'react-router';

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
    this.props.addComment(this.state);
    browserHistory.push('/');
  }

  handleOnSummaryChange(event) {
    this.setState({
      summary: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add a Comment</h2>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            placeholder="Summary"
            onChange={(event) => this.handleOnSummaryChange(event)} />
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
    addComment: bindActionCreators(addComment, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsNew);
