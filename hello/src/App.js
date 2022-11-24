import './App.css';
import Greet from './componenst/Greet';
import Welcome from './componenst/Welcome';
import Hi from './componenst/Hi';
import React, {Component } from 'react';
class App extends Component {
  render() {
  return (
    <div className="App">
      <Greet name= "Eugen" heroName="all">
        <p>This is children props</p>
        </Greet>
      <Greet name= "Ana" heroName="Superman"/>
      <Greet name= "Colun" heroName="Wonder"/>      
      < Welcome name= "Eugen" heroName="all"/>
      < Welcome name= "Ana" heroName="Superman"/>
      < Welcome name= "Colun" heroName="Wonder"/>
      < Welcome/>
      {/* <Hi/> */}
    </div>
  );
}
}

export default App;
