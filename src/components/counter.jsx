import React, { Component } from 'react';

class Counter extends Component {
   
        state={
            count: 0
        };

        render() { 
        return(
             <React.Fragment>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
                </React.Fragment>
        );//this is a jsx component (must have one parent)
        // 'this' references the object we are currenty working with
    }
//jsx expression's get compiled to react elements

    formatCount(){
        const {count} = this.state;
        return count === 0? 'Zero' : count;
    }
}
 
export default Counter;