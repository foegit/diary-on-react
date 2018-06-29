import React, { Component } from 'react';
import { Provider } from 'react-redux';

import SideBar from './SideBar';
import Content from './Content';

import store from '../store';
class App extends Component{
  render(){
    return (
    <Provider store={store}>
      <React.Fragment>
        <SideBar/>
        <Content/>
      </React.Fragment>
    </Provider>);
  }
}


export default App;
