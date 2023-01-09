import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return (<div>
            {/* {this.props.giveno(this.state.counters.length)} */}
            <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>

            {this.props.counters.map(counter => 
            <Counter key={counter.id} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} 
            onDelete={this.props.onDelete} counter={counter} />
            //better way of preventing redundancies for id and value as they are already contained in counter
            // <Counter key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value} />
            // {/* <h4> Counter #{counter.id} </h4>
            // </Counter> */}
            )}
        </div>);
    }
}
 
export default Counters;