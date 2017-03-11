import React, { Component } from 'react';

class Player extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_PLAYER',
      id: this.props.player.id
    });
  }

  render() {
    const { text, id } = this.props.player;

    return (
      <div>
        <li>
          {text}
          <button onClick={() => this.handleOnClick()}> X </button>
        </li>
      </div>
    );
  }
};

export default Player;
