import React from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
      amount: 0,
    }
  }

  transaction = e => {
    e.preventDefault();
    
    const newTransaction = {
      from: this.from,
      to: this.to,
      amount: this.amount
    }

    this.setState({
      from: "",
      to: "",
      amount: 0,
    })
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Lambda Coin Wallet</h1>
        <TransactionForm transaction={this.transaction} handleChanges={this.handleChanges} {...this.state}/>
      </div>
    );
  }
}

export default App;
