import React from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../actions/index.js';
import CellView from '../components/CellView.js';
import Nav from '../components/Nav';
import PureComponent from './PureComponent';

class All extends PureComponent {
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

function mapStateToProps(state) {
  return {
    isFetching:state.isFetching,
    items:state.items
  }
}

export default connect(mapStateToProps)(All);
