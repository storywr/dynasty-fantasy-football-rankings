import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayers } from '../actions/players';
import { Link } from 'react-router';

class PlayersPage extends Component {

  componentDidMount(){
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            {this.props.players.map(player =>
              <li key={player.id}>
                <Link to={`/players/${player.id}`}>{ player.name }</Link>
              </li>
            )}
          </ul>
          <Link to="/players/new">Add a Player</Link>
        </div>
        {this.props.children}
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    players: state.players
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayers: bindActionCreators(fetchPlayers, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersPage);
