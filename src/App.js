import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import React from 'react';

let x = 0;


// setNo = (x) => {
//   return(
//      5
//     );
// }

function App() {
  return (
    <React.Fragment>
   <NavBar/>
   <main className="container">
    <Counters />
   </main>
   </React.Fragment>
  );
}

export default App;
