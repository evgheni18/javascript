import React, { Component } from 'react';

class ClassClick extends Component {
clickHandler(){
    console.log("Click me")
} 
    render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Share</button>
      </div>
    );
  }
}

export default ClassClick;
