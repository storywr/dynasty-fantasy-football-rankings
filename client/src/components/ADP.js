import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

const ADP = (props) => {
  const mflplayers = props.mflplayers;
  const adp = props.adp;

  return (
    <div>
      <PageHeader>ADP <small>Check the Market</small></PageHeader>
      <ul>{adp.map(player =>
        <li>{player}</li>
      )}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mflplayers: state.mflplayers,
    adp: state.adp
  };
};

export default connect(mapStateToProps)(ADP);
