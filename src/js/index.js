import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './store/configureStore.js';
import Root from './containers/Root.js';

// let store = configureStore();

let store;

if (__DEV__) {
  let mockStore = {
    isFetching: false,
    items: [{
      body: "测试数据1",
      created_at: '2016-08-19T08:54:33Z',
      labels: [{
        name: '前端'
      }],
      number: 4,
      title: '测试数据2'
    }, {
      body: '测试数据3',
      created_at: '2016-08-10T08:54:33Z',
      labels: [{
        name: '随笔'
      }],
      number: 3,
      title: '测试数据4'
    }, {
      body: '测试数据5',
      created_at: '2016-08-09T08:54:33Z',
      labels: [{
        name: '构建打包'
      }, {
        name: '随笔'
      }],
      number: 2,
      title: '测试数据6'
    }, {
      body: '测试数据7',
      created_at: '2015-08-19T08:54:33Z',
      labels: [{
        name: '随笔'
      }],
      number: 1,
      title: '测试数据8'
    }]
  };

  store = configureStore(mockStore);
} else {
  store = configureStore();
}

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('container')
);