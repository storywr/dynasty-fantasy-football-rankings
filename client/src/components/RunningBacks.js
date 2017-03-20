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
        <h3>Running Back Rankings</h3>
        <img src={"https://static01.nyt.com/images/2015/10/16/sports/16FALCONSweb2/16FALCONSweb2-master1050.jpg"}/><br></br>
        {this.props.players.map((player, index) => (
          <div key={index}>
              <p>{player.positional_ranking}: <Link to={`/players/${player.id}`}>{ player.name }</Link></p>
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
