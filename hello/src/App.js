import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hi from './components/Hi';
import React, {Component } from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Calculator from './components/Calculator';
import './appStyles.css'
import styles from "./appStyles.modules.css"

class App extends Component {
  render() {
  return (
    <div className="App">
      {/* <Calculator /> */}
      <h1 className = 'error'>Error</h1>
      <h1 className= {styles.success}>Success</h1>
      {/* <Stylesheet primary = {true}/> */}
      <Inline />
      {/* <NameList /> */}
      {/* <Person /> */}
      {/* <UserGreeting /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name= "Eugen" heroName="all">
        <p>This is children props</p>
        </Greet> */}
      {/* <Greet name= "Ana" heroName="Superman"/> */}
      {/* <Greet name= "Colun" heroName="Wonder"/>       */}
      {/* < Welcome name= "Eugen" heroName="all"/> */}
      {/* < Welcome name= "Ana" heroName="Superman"/> */}
      {/* < Welcome name= "Colun" heroName="Wonder"/> */}
      {/* < Welcome/> */}
      {/* <Hi/> */}
    </div>
  );
}
}

export default App;
