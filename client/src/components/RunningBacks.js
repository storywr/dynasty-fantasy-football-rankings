import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayers } from '../actions/players';
import { Link } from 'react-router';

class RunningBacks extends Component {

  componentDidMount(){
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div>
        <h1>Running Back Rankings</h1>
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

function checkRB(player) {
  return player.position === "RB"
}

const mapStateToProps = (state) => {
  return {
    players: state.players.filter(checkRB)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayers: bindActionCreators(fetchPlayers, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RunningBacks);
