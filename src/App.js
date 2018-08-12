import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName:'Tban',
  }
  handlechange = (event) => {
    this.setState({userName: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">React exo1</h1>
        </header>
        <p className="App-intro">
          <UserInput changed={this.handlechange}
          currentName={this.state.userName}/>
          <UserOutput name={this.state.userName}/>
          <UserOutput name={this.state.userName}/>
          <UserOutput name={this.state.userName}/>
        </p>
      </div>
    );
  }
}

export default App;
