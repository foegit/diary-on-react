import React from 'react';
import { Provider } from 'react-redux';

import SideBar from './SideBar';
import Content from './Content';
import store from '../store';

const App = ()=>
  <Provider store={store}>
      <React.Fragment>
        <SideBar/>
        <Content/>
      </React.Fragment>
    </Provider>
    
export default App;
