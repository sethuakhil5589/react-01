import { Component, useState } from "react";


// export default class Counter extends Component{
//         state ={
//             count: this.props.starterValue
//         }
//         increment =() => {
//         this.setState({
//             count:this.state.count +1
//         })
//         console.log("current value of count at increment"+this.state.count)
//         }

//         decrement = () => {
//             this.setState({
//                 count:this.state.count -1
//             })
//             console.log("current value of count at decrement"+this.state.count)
//         }

//     render(){
//         return(
//             <div>
//                 <div>Button clicked count: {this.state.count}</div>
//                 <button onClick={this.increment} >Increment</button>
//                 <button onClick={this.decrement}>Decrement</button>
//             </div>
//         );
//     }
// }

export default function Counter(){
    const [count, setCount]= useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    return(
        <div>
            <div>Count: {count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        
    );
}