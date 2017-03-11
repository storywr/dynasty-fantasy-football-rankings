import React, { Component } from 'react';
import Player from './Player';

class Players extends Component {

  render() {
    const { store } = this.props;
    const players = store.getState().players.map((player, index) => {
      return <Player key={index} player={player} store={store} />
    });

    return(
      <ul>
        {players}
      </ul>
    );
  }
};

export default Players;
