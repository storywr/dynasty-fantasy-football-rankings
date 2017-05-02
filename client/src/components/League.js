import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import { fetchRosters } from  '../actions/rosters.js'
import { fetchMyLeague } from  '../actions/league.js'
import { bindActionCreators } from 'redux';
import '../Positions.css'
import '../league.css'

class League extends Component {
  componentDidMount() {
    this.props.actions.fetchRosters()
  }

  render() {

    return (
      <div>
        <PageHeader className="leagueheader">{this.props.league.name}</PageHeader><br></br><br></br>
        <div className="players">
          <Carousel className="leaguecarousel">
            {this.props.league.franchises.franchise.map(franchise =>
              <Carousel.Item>
                <img width={300} height={300} alt="500x500" src={franchise.icon || "http://i.nflcdn.com/static/site/7.5/img/video/poster-frames/poster-frame-280x210.jpg"}/>
                <Carousel.Caption>
                  <h2><Link to={`/rosters/${franchise.id}`}>{franchise.name}</Link></h2>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    league: state.league.league
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ fetchRosters }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
