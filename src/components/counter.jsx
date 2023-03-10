import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps",prevProps);
        console.log("prevState",prevState);
    }
   
    componentWillUnmount(){
        console.log('Counter-Unmounted')
    }

        // state={
        //     value: this.props.counter.value === undefined? 0: this.props.counter.value,
        //     tags: [],
        // };

        styles={
            fontSize: 15,
            fontWeight: 'bold',
        };

        render() { 
            console.log('counter - Rendered');


        return(
             <div>
                {/* {this.props.children} */}
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                //  onClick={() => this.handleIncrement(Counter.product) }
                 onClick={() => this.props.onIncrement(this.props.counter)}

                 style= {{fontSize : 15}}
                 className='btn btn-secondary btn-sm'>Increment</button>

                 <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-danger btn-sm m-2"> - </button>
                 <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> Delete </button>


                {/* {this.state.tags.length === 0 && "please create a new Tag"} */}
                {/* or *
                 {this.state.tags. === 0? "please create a new Tag" : ''} 
                 {this.renderTags()} */}
                </div>
        );
        /*this is a jsx component (must have one parent)
        // 'this' references the object we are currenty working with
        //jsx expression's get compiled to react elements*/
    }

    // handleIncrement = (product) =>{
    //     console.log(product); 
    //     this.setState({ value: this.state.value + 1})
    //  }
    //  handleIncrement2 = () =>{
    //     this.setState({ value: this.state.value + 1})
    //  }
    //  handleDecrement = () =>{
    //     this.setState({ value: this.state.value - 1})
    //  }
    // renderTags(){
    //     if(this.state.tags.length === 0){
    //         return <p>There are no tags</p>
    //     }
    //    return(
    //     //   taking a string and mapping it to a jsx object 
    //    <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)} </ul>
    //    );
    // }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const {value} = this.props.counter;
        return value === 0? 'Zero' : value;
    }
}
 
export default Counter;