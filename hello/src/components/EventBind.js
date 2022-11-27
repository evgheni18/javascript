import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:"Good"
    //     })
    //     console.log(this)
    // }
    clickHandler = () => {
        this.setState({
            message: "Good"
        })
    }

  render() {
    return (
      <div>
       <div>{this.state.message}</div> 
      {/* <button onClick={this.clickHandler.bind(this)}>paste</button> */}
      {/* <button onClick={() => this.clickHandler()}>paste</button> */}
      <button onClick={this.clickHandler}>paste</button>
      </div>
    );
  }
}

export default EventBind;
