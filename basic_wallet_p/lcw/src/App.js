import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Lambda Coin Wallet</h1>
        <h3>User: {this.state.user}</h3>
        <input
          placeholder="Update User"
          onChange={this.handleChanges}
          name="user"
        />
      </div>
    );
  }
}

export default App;
