import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters:[
            {id:1,value:0 },
            {id:2, value:1},
            {id:3, value:2},
            {id:4, value:3},
            {id:5, value:4},

        ],
      } ;

      handleIncrement = (counter) =>{

        //too make counters and counter object in this state remain the same
        //changing a state directly is wrong in react
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;

        this.setState({counters});

      }

      handleDecrement = (counter) =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;

        this.setState({counters});
      }

      handleReset = () =>{
       const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({counters});
      }

      handleDelete = (counterId)=>{
        console.log('Event Handler Called', counterId);

        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
      }
    
    render() { 
        return (<div>
            {/* {this.props.giveno(this.state.counters.length)} */}
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>

            {this.state.counters.map(counter => 
            <Counter key={counter.id} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} counter={counter} />
            //better way of preventing redundancies for id and value as they are already contained in counter
            // <Counter key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value} />
            // {/* <h4> Counter #{counter.id} </h4>
            // </Counter> */}
            )}
        </div>);
    }
}
 
export default Counters;