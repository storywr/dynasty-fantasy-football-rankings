import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayers } from '../actions/players';
import { Link } from 'react-router';

class WideReceivers extends Component {

  componentDidMount(){
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div>
        <h3>Wide Receiver Rankings</h3>
        <img src={"https://s-media-cache-ak0.pinimg.com/originals/0d/34/ea/0d34ea2a4e192454162711f3e548cc22.jpg"}/><br></br>
        {this.props.players.map((player, index) => (
          <div key={index}>
              <p>{player.positional_ranking}: {player.name}</p>
              <img src={player.pic}/>
          </div>
        ))}
      </div>
    );
  }

};

function checkWR(player) {
  return player.position === "WR"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkWR)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayers: bindActionCreators(fetchPlayers, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WideReceivers);
