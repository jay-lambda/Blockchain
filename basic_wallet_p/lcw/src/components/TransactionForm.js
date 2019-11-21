import React from 'react'
import '../App.css'

class TransactionForm extends React.Component {
    render(){
        return(
            <div className="form">
                <form className="transaction-form" onSubmit={this.props.transaction}>
                    <input
                        className="input"
                        placeholder="From"
                        onChange={this.props.handleChanges}
                        value={this.props.from}
                        name="from"
                    />
                    <input
                        className="input"
                        placeholder="To"
                        onChange={this.props.handleChanges}
                        value={this.props.to}
                        name="to"
                    />
                    <input
                        className="input"
                        placeholder="amount"
                        onChange={this.props.handleChanges}
                        value={this.props.amount}
                        name="amount"
                    />
                    <button type="submit">Send Coins</button>
                </form>
            </div>
        )
    }
}

export default TransactionForm;