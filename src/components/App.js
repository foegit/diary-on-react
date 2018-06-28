import React, { Component } from 'react';

class App extends Component{
  render(){
    return (<div>
      <div className="sideBar">
        <h1>Diary app</h1>
        <h2>Comment with no sense</h2>
      </div>
      <div className="contentPage">
        <div className="diaryItems panel"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt expedita similique autem, ab, aliquam, eos molestiae eum beatae distinctio cum voluptatibus nesciunt accusamus. Amet quam dolor illo deleniti, ratione harum.</div>
        <div className="commentBlock panel"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat optio fugiat maxime perspiciatis quisquam accusantium totam animi deserunt cupiditate temporibus, ullam deleniti, asperiores culpa aliquid explicabo sint. Soluta, molestiae, veniam!</div>
      </div>
    </div>);
  }
}
export default App;
