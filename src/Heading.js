import { Component } from "react";
import logo from './logo.svg';

// This is a class way or method of creating components

// class Heading extends Component{
//     render(){
//         return(
//         <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {this.props.title}
//           {/* Learn React */}
//         </a>
//       </header>
//         );
//     }  
// }

// This is the functional way or method of creating components

// function Heading(){
//   return(
//     <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
//   );

// }

// This is the Arrow way or method of creating components

const Heading=(props) =>(
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.title}
  </a>
    <div>{props.value}</div>
    <div>{props.numValue}</div>
    <div>{props.person.name}</div>
    <div>{props.person.location}</div>
    <div>{props.arrayOfGreetings}</div>
    <div>Addition of Two Numbers 201 and 101 is: <b>{props.addition(101,201)}</b></div>
</header>
);
export default Heading
