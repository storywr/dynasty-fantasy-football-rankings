import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import '../Positions.css'

class League extends Component {

  render() {

    return (
      <div>
        <PageHeader className="positionheader">{this.props.league.name}</PageHeader><br></br><br></br>
        <div className="players">
          <Carousel className="positioncarousel">
            {this.props.league.franchises.franchise.map(franchise =>
              <Carousel.Item>
                <img width={200} height={200} alt="100x100" src={franchise.icon || "http://i.nflcdn.com/static/site/7.5/img/video/poster-frames/poster-frame-280x210.jpg"}/>
                <Carousel.Caption>
                  <h2>{franchise.name}</h2>
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

export default connect(mapStateToProps)(League);
