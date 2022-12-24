import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters:[
            {id:1, },
            {id:2, value:1},
            {id:3, value:2},
            {id:4, value:3},
            {id:5, value:4},

        ],
      } ;

      handleDelete = (counterId)=>{
        console.log('Event Handler Called', counterId);

        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
      }
    
    render() { 
        return (<div>
            {this.state.counters.map(counter => 
            <Counter key={counter.id} onDelete={this.handleDelete} counter={counter} />
            //better way of preventing redundancies for id and value as they are already contained in counter
            // <Counter key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value} />
            // {/* <h4> Counter #{counter.id} </h4>
            // </Counter> */}
            )}
        </div>);
    }
}
 
export default Counters;