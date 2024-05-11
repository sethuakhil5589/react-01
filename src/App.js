import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import CustomComponent from './customComponent';
import Laptops from './Laptops';

function App() {
  let flag=true;
  let data;
  // if(flag)
  //   data = <Heading />
  // else
  //   data=<CustomComponent />

  return (
    <div className="App">
      {/* <Heading />
      <CustomComponent /> */}
      {/* {data} */}
      {/* {flag ? <Heading title= "Learn React from Official site" /> : <CustomComponent />} */}
      {/* <Laptops /> */}
      <Heading title="Learn React from official site" />
    </div>
  );
}

export default App;
