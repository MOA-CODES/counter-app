import React, { Component } from 'react';

class Counter extends Component {
   
        state={
            count: 0,
            tags: [],
        };

        styles={
            fontSize: 15,
            fontWeight: 'bold',
        };

        render() { 
        return(
             <React.Fragment>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                 onClick={this.handleIncrement }
                 style= {{fontSize : 15}}
                 className='btn btn-secondary btn-sm'>Increment</button>

                {/* {this.state.tags.length === 0 && "please create a new Tag"} */}
                {/* or *
                 {this.state.tags. === 0? "please create a new Tag" : ''} 
                 {this.renderTags()} */}

                </React.Fragment>
        );
        /*this is a jsx component (must have one parent)
        // 'this' references the object we are currenty working with
        //jsx expression's get compiled to react elements*/
    }

    handleIncrement = () =>{ 
        this.setState({ count: this.state.count + 1})
     }

    renderTags(){
        if(this.state.tags.length === 0){
            return <p>There are no tags</p>
        }
        
       return(
        //   taking a string and mapping it to a jsx object 
       <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
       );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const {count} = this.state;
        return count === 0? 'Zero' : count;
    }
}
 
export default Counter;