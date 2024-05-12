import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Heading from './Heading';
import CustomComponent from './customComponent';
import Laptops from './Laptops';
import Slider from './Slider';
import { useState } from 'react';

function App() {
  let flag=true;
  let data;
  // if(flag)
  //   data = <Heading />
  // else
  //   data=<CustomComponent />
  const [visible, setVisible]=useState(true);
  const buttonDisplayText= visible ? "Hide" : "Show"
  return (
    <div className="App">
      {/* <Heading />
      <CustomComponent /> */}
      {/* {data} */}
      {/* {flag ? <Heading title= "Learn React from Official site" /> : <CustomComponent />} */}
      {/* <Laptops /> */}
      {/* <Slider minValue={0} maxValue={5}/> */}
      {visible ? <Slider minValue={0} maxValue={5}/> : <div>Post Hidden</div>}
      <button onClick={()=>{setVisible(!visible)}}>{buttonDisplayText}</button>
      <Counter starterValue={35}/>
      <NavBar 
      onShowTime={()=> alert(new  Date())}
      onGreetings={()=> alert("Hello")}
      />
      <Heading title="Learn React from official site" 
               value={"Hello-World"}
               numValue={5589}
               person={
                {name: "Sandeep", location: "Hyderabad"}
               }
               arrayOfGreetings={["Hello","Hii","Bonjore"]}
               addition={
                (num1,num2) =>num1+num2
              }
      />
    </div>
    // <Slider />
  );
}
function NavBar({onShowTime},{onGreetings}){
  return(
    <div>
    <MyButton onClick={onShowTime}>Date/Time</MyButton>
    <MyButton onClick={onGreetings}>Greetings</MyButton>
    </div>
    
  );
  
}

function dateAndTime(){
  return(
    alert("Current Date and Time: "+new Date().toLocaleTimeString())
  );
}

function onHover(){
  console.log("On mouse Over")
}

function MyButton({onClick, children}){
  return(
    <button onClick={onClick}>
      {children}
    </button>
  );
}
export default App;
