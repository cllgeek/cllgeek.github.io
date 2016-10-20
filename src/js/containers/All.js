import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../actions/index.js';
import CellView from '../components/CellView.js';
import Nav from '../components/Nav'

class All extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssuesIfNeeded('created', 10000));
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div>
        <Nav />
        <div className="list">
          <CellView title="全部" items={this.props.items} />
        </div>
      </div>
    );
  }
};

export default All
