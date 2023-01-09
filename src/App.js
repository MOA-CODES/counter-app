import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import React from 'react';

class App extends React.Component {
///
state = {
  counters:[
      {id:1, value:0},
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
  counters[index].value++;

  this.setState({counters});
}

handleDecrement = (counter) =>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
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
///

render(){
  return (
    <React.Fragment>
   <NavBar totalcounters={this.state.counters.filter(c=>c.value>0).length}/>
   <main className="container">
    <Counters onReset={this.handleReset} onDelete={this.handleDelete} onDecrement={this.handleDecrement}
     onIncrement={this.handleIncrement} counters={this.state.counters}/>
   </main>
   </React.Fragment>
  );
}}

export default App;
