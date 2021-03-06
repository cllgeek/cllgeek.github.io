import React from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../actions/index.js';
import Article from '../components/Article.js';
import Nav from '../components/Nav';
import PureComponent from './PureComponent';

class Post extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssuesIfNeeded('created', 10000));
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    let view = [];
    this.props.items.map((item, index) => {
      if (parseInt(item.number) === parseInt(this.props.params.id)) {
        view.push(
          <Article {...item}  key={index} />
        );
      }
    });

    return (
      <div>
        <Nav />
        <div>
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

export default connect(mapStateToProps)(Post);