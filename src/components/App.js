import React, { Component } from 'react';

import SideBar from './SideBar';
import Content from './Content';
import {addEntry, deleteEntry} from '../actions/entryActions';
import {addComment} from '../actions/commentActions';

import store from '../store';

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <SideBar/>
        <Content/>
    </React.Fragment>);
  }
}


export default App;
