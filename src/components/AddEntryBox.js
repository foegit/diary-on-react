import React, { Component } from 'react';

class AddEntryBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
      validText: true,
      error: ''
    };
    this.input = React.createRef();
    this.textChange = this.textChange.bind(this);
    this.textChange = this.textChange.bind(this);
  }
  textChange(event){
    this.setState({inputText:event.target.value});
    this.setState({validText:true, error: ""});
  }
  addNewEntry(){
    if(this.state.inputText.length > 3){
      this.props.onNewEntry(this.state.inputText);
      this.setState({inputText: ''})
    }
    else {
      this.setState({validText: false, error: "Min length 4 symbol"})

    }
  }
  render(){
    const { onNewEntry } = this.props;
    const { validText, inputText, error } = this.state;

    return (
   <div className="add-entry-box">
     <span className='errorLog'>{error}</span>
     <input
      type="text"
      placeholder="Type name here..."
      id='entry-input'
      value={this.state.inputText}
      onChange={this.textChange}
      className={validText?"":"invalid-input-data"}
      />
    <button
      className="add-btn app-btn"
      onClick={()=>this.addNewEntry()}>Add new</button>

  </div>);
  }
}
export default AddEntryBox;
