import React, { Component } from 'react';
import SideBar from './SideBar';
import Content from './Content';

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
