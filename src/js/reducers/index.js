// import { combineReducers } from 'redux';
import { FETCH_ISSUES, RECEIVE_ISSUES } from '../constants/ActionTypes.js';
import { fetchIssues, receiveIssues } from '../actions/index.js';
import SImmutable from 'seamless-immutable';

var defaultIssuesState = SImmutable({
  isFetching: false,
  items: []
});

// issues reducer
function postIssues(state=defaultIssuesState, action) {
  switch (action.type) {
    case FETCH_ISSUES:
      // 获取issues
      return state.set('isFetching',true);

    case RECEIVE_ISSUES:
      // 接收issues
      return state.merge({
        isFetching: false,
        items: action.posts
      });

    default:
      return state;
  }
}

export default postIssues;

