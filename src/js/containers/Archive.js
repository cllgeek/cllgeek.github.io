import React from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../actions/index.js';
import CellView from '../components/CellView.js';
import Nav from '../components/Nav';
import PureComponent from './PureComponent';

class Archive extends PureComponent {
  constructor(props) {
    super(props);
    this.spliceJson = this.spliceJson.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssuesIfNeeded('created', 10000));
  }

  // 拼接 json
  spliceJson(items) {
    let list = this.props.items,
        len = list.length,
        year = 0,
        index = 0,
        articles = {};

    for (let i = 0; i < len; i++) {
      let time = parseInt(list[i]['created_at'].substring(0, 4));

      if (time !== year) {
        articles[time + '年'] = [];
        year = time;
      }

      articles[time + '年'].push(list[i]);
    }

    return articles;
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    let articles = this.spliceJson(this.props.items),
        view = [];

    for (let year in articles) {
      let yearShow = year.substring(0, year.length - 1);
      view.push(<CellView key={yearShow} title={yearShow} items={articles[year]} />);
    }

    return (
      <div>
        <Nav />
        <div className="list">
          {view}
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

export default connect(mapStateToProps)(Archive);